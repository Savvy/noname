<template>
    <div class="container">
        <div class="thread">
            <div class="header d-flex justify-between align-center w-100">
                <div class="left">
                    <div class="header-title">{{ thread.title }}</div>
                    <div class="header-description">Thread in <nuxt-link :to="`/forum/${thread.forum.slug}`">{{ thread.forum.name }}</nuxt-link> started by 
                    <nuxt-link :to="`/profile/${thread.user.username}`">{{ thread.user.username }}</nuxt-link>, 
                    <span class="time"><time-ago refresh :long=true :datetime="thread.createdAt"/></span></div>
                </div>
                <div class="right d-flex flex-row">
                    <div class="btn">Share <i class="bi bi-caret-down-fill"></i></div>
                </div>
            </div>
            <div class="sub-header d-flex w-100" v-if="showPagination">
                <div class="pagination">
                    <div class="btn btn-default btn-prev"><i class="bi bi-chevron-double-left"></i></div>
                    <div class="btn btn-default btn-page">1</div>
                    <div class="btn btn-default btn-next"><i class="bi bi-chevron-double-right"></i></div>
                </div>
            </div>
            <div class="body w-100">
                <!-- <CommonPost avatar="https://i.imgur.com/rzuOBa8.png" name="Cyber" role="Admin" :threadAuthor=true postIndex=1 /> -->
                <CommonPost :post='initialPost' :index='1' />
                <CommonPost v-for="(post, index) in thread.posts" :key="post.postId" :post='post' :index='(index + 2)' />
            </div>
            <client-only>
                <CommonRichEditor v-model="post.content" />
                <div id="submit" class="btn btn-primary" @click="create">Post Reply</div>
            </client-only>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: this.thread.title
        }
    },
    async asyncData({ $axios, route, redirect }) {
        if (!route.params.id) {
            redirect('/404')
        }
        let { data } = await $axios.get(`/thread/${route.params.id}`);
        return { thread: data.result };
    },
    data() {
        return {
            creation_success: false,
            post: {
                content: '',
            },
        }
    },
    computed: {
        initialPost() {
            return { 
                user: this.thread.user,
                title: this.thread.title,
                content: this.thread.content,
                updatedAt: this.thread.updatedAt 
            }
        },
        showPagination() {
            return true;
        }
    },
    methods: {
        async populate() {
            let { data } = await this.$axios.get(`/thread/${this.$route.params.id}`);
            this.thread = data.result;
        },
        create() {
            if (this.creation_success || this.post.content.length < 4) return;
            let data = { thread: this.thread._id, content: this.post.content };
            this.$axios.post('/post', data).then((res) => res.data)
            .then((data) => {
                this.creation_success = data.success;
                if (!data.success) {
                    console.log(data);
                    return;
                }
                this.post.content = '';
                this.populate();
            });
        },
    }
}
</script>

<style scoped>

.header .right {
    gap: 10px;
}

.header .header-title {
    font-weight: 500;
    font-size: 20px;
    color: var(--light-text);
}

.header .header-description {
    margin-top: 5px;
    font-size: 14px;
    opacity: 0.75;
}

.btn i {
    margin-right: 0;
}

.sub-header {
    margin: 10px 0;
}

.editor-container {
    margin-bottom: 10px;
}

#submit {
    float: right;
}
</style>