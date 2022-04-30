<template>
    <div class="container">
        <div class="thread">
            <div class="header d-flex justify-between align-center w-100">
                <div class="left">
                    <div class="header-title">{{ thread.title }}</div>
                    <div class="header-description">
                        <ul>
                            <li v-tooltip="'Thread started in ' + thread.forum.name"><i class="bi bi-chat"></i> <nuxt-link :to="`/forum/${thread.forum.slug}`">{{ thread.forum.name }}</nuxt-link></li>
                            <li v-tooltip="'Thread Starter'"><i class="bi bi-person"></i> <nuxt-link :to="`/profile/${thread.user.username}`">{{ thread.user.username }}</nuxt-link></li>
                            <li v-tooltip="'Start Date'"><i class="bi bi-clock"></i> <span class="time"><time-ago refresh :long=true :datetime="thread.createdAt"/></span></li>
                        </ul>
                    </div>
                </div>
                <div class="right d-flex flex-row">
                    <div class="btn btn-primary watch-btn" v-if="isAuthenticated">Watch</div>
                </div>
            </div>
            <div class="sub-header d-flex w-100" v-if="showPagination">
                <CommonPagination :url="`/threads/${thread.threadId}/`" :pagination=pagination />
            </div>
            <div class="body w-100">
                <!-- <CommonPost avatar="https://i.imgur.com/rzuOBa8.png" name="Cyber" role="Admin" :threadAuthor=true postIndex=1 /> -->
                <CommonPost :post='initialPost' :index='1' v-if="pagination.currentPage == 1" />
                <CommonPost v-for="(post, index) in thread.posts" :key="post.postId" :post='post' :index='(index + 2)' />
            </div>
            <div class="block">
                <CommonPagination :url="`/threads/${thread.threadId}/`" :pagination=pagination />
                <nuxt-link to="/login" class="btn btn-primary" v-if="!user">Log in to post</nuxt-link>
            </div>
            <client-only v-if="user">
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
            title: this.thread.title,
        }
    },
    async asyncData({ $axios, redirect, params }) {
        if (!params.id) {
            redirect('/404')
        }
        const currentPage = parseInt(params.page) || 1;
        let { data } = await $axios.get(`/thread/${params.id}/${currentPage}`);
        if (params.page > data.pagination.totalPages) {
            redirect(`/threads/${params.id}/${data.pagination.totalPages}`);
            return;
        }
        return { thread: data.result, pagination: data.pagination };
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
            if (this.creation_success) return;
            if (this.post.content.length < this.settings.minPostLength) {
                // TODO: Alert user of minimum post char count
                return;
            }

            if (this.post.content.length > this.settings.maxPostLength) {
                // TODO: Alert user of maximum post char count
                return;
            }
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

.header-description > ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
}

.btn i {
    margin-right: 0;
}

.sub-header {
    margin: 10px 0;
    flex-direction: row;
    justify-content: space-between;
}

.editor-container {
    margin-bottom: 10px;
}

#submit {
    float: right;
}

.block {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

span.time, span.time .v-timeago {
    color: var(--light-text);
}
</style>