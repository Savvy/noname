<template>
    <div class="body w-100" v-if="forum">
        <CommonThread v-for="thread in forum.threads" :thread="thread" :recent_post="thread.posts[0]" :recent_thread="forum.recent_thread" :key="thread.slug" />
    </div>
</template>

<script>
export default {
    props: {
        forum: {
            type: Object,
            required: true,
        }
    },
}
</script>

<style scoped>

.body {
    background-color: var(--body-color);
    border-radius: var(--border-radius);
}

.thread:nth-child(even) {
    background-color: var(--bg-light-1);
}
</style>