<template>
    <div id="create-thread">
        <div class="container">
            <div class="header d-flex justify-between align-center w-100">
                <div class="left">
                    <div class="header-title">Create Thread</div>
                    <div class="header-description">Thread in <nuxt-link :to="`/forum/${forum.slug}`">{{ forum.name }}</nuxt-link></div>
                </div>
                <div class="right d-flex flex-row">
                </div>
            </div>
            <div class="input-group">
                <input type="text" v-model="thread.title" name="thread-title" placeholder="Thread title..." class="input-default">
            </div>
            <client-only>
                <CommonRichEditor v-model="thread.content" />
                <div id="submit" class="btn btn-primary" @click="createThread">Create Thread</div>
            </client-only>
        </div>
    </div>
</template>

<script>
export default {
    middleware: 'authRequired',
    head() {
        return {
            title: 'New Thread'
        }
    },
    data() {
        return {
            creation_success: false,
            thread: {
                title: '',
                content: '',
            }
        }
    },
    async asyncData({ $axios, route, redirect }) {
        try {
            let { data } = await $axios.get(`/forum/${route.params.slug}`);
            return { forum: data.result };
        } catch (error) {
            if (error.response.data.message === 'forum_not_found') {
                redirect('/404');
                return;
            }
        }
    },
    methods: {
        createThread() {
            if (this.creation_success) return;
            if (this.thread.content.length < this.settings.minPostLength) {
                // TODO: Alert user of minimum post char count
                console.log('min post not met')
                return;
            }

            if (this.thread.content.length > this.settings.maxPostLength) {
                // TODO: Alert user of maximum post char count
                console.log('max post not met')
                return;
            }

            if (this.thread.title.length < this.settings.minTitleLength) {
                // TODO: Alert user of minimum title char count
                console.log('min title not met')
                return;
            }

            if (this.thread.title.length > this.settings.maxTitleLength) {
                // TODO: Alert user of maximum title char count
                console.log('max title not met')
                return;
            }

            let data = { forum: this.forum._id, ...this.thread };
            this.$axios.post('/thread', data).then((res) => res.data)
            .then((data) => {
                this.creation_success = data.success;
                if (!data.success) {
                    console.log(data);
                    return;
                }
                this.$router.push(`/threads/${data.thread}`);
                // TODO: If success redirect to new thread.
            });
        }
    }
}
</script>

<style scoped>
.header {
    margin-bottom: 30px;
}

.header .header-title {
    font-weight: 500;
    font-size: 20px;
    color: var(--light-text);
}

.input-group {
    margin-bottom: 10px;
    max-width: 100%;
    width: 100%;
}

.btn.btn-primary#submit {
    float: right;
}
</style>