<template>
    <div id="category">
        <div class="container">
            <div class="forum">
                <div class="header d-flex justify-between align-center w-100">
                    <div class="left d-flex align-center">
                        <div class="header-title"><nuxt-link to="/">Home</nuxt-link> <span>/</span> {{ forum.name }}</div>
                        <div class="header-description">{{ forum.description }}</div>
                    </div>
                    <div class="right d-flex flex-row">
                        <div class="btn sort">Sort By <i class="bi bi-caret-down-fill"></i></div>
                        <nuxt-link :to="`/forum/${getSlug}/create-thread`" class="btn btn-primary" v-if="user">New Post</nuxt-link>
                        <nuxt-link to="/login" class="btn btn-primary" v-else>Log in to post</nuxt-link>
                    </div>
                </div>
                <div class="sub-header d-flex w-100" v-if="showPagination">
                    <div class="pagination">
                        <div class="btn btn-default btn-prev"><i class="bi bi-chevron-double-left"></i></div>
                        <div class="btn btn-default btn-page">1</div>
                        <div class="btn btn-default btn-next"><i class="bi bi-chevron-double-right"></i></div>
                    </div>
                </div>
                <div class="body w-100" v-if="forum">
                    <CommonThread v-for="thread in forum.threads" :thread="thread" :recent_post="thread.posts[0]" :recent_thread="forum.recent_thread" :key="thread.slug" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: this.forum.name
        }
    },
    data() {
        return {
            showPagination: true
        }
    },
    async asyncData({ $axios, route }) {
        let { data } = await $axios.get(`/forum/${route.params.slug}`);
        return { forum: data.result };
    },
    computed: {
        getSlug() {
            return this.$route.params.slug;
        }
    }
}
</script>

<style scoped>
.sub-header {
    margin: 10px 0;
}

.forum {
    margin-bottom: 15px;
    border-radius: var(--border-radius);
    overflow: hidden;
}

.header .right {
    gap: 10px;
}

.header .header-title {
    font-weight: 500;
    font-size: 20px;
    color: var(--light-text);
}

.header .header-title span {
    font-size: 17px;
}

.header .header-description {
    margin-top: 5px;
    font-size: 14px;
    opacity: 0.75;
}

.sort.btn i {
    margin-right: 0;
}

.body {
    background-color: var(--body-color);
    border-radius: var(--border-radius);
}

.thread:nth-child(even) {
    background-color: var(--bg-light-1);
}
</style>