<template>
    <div class="forum">
        <div class="header d-flex justify-between align-center w-100">
            <div class="left">
                <div class="header-title">Home / News & Announcements</div>
                <div class="header-description">The latest news and announcements regarding the community.</div>
            </div>
            <div class="right d-flex flex-row">
                <div class="btn">Sort By <i class="bi bi-caret-down-fill"></i></div>
                <div class="btn btn-primary">Log in to post</div>
            </div>
        </div>
        <div class="body w-100">
            <CommonThread v-for="index in 10" :key="index" />
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.forum {
    margin-bottom: 15px;
    border-radius: 5px;
    overflow: hidden;
}

.header {
    position: relative;
    padding: 15px 25px;
    background-color: var(--header-color);
    color: var(--primary-color);
}

.header .right {
    gap: 10px;
}

.header .header-title {
    font-weight: 500;
    font-size: 20px;
}

.header .header-description {
    margin-top: 5px;
    font-size: 14px;
    opacity: 0.75;
}

.body {
    background-color: var(--body-color);
    /* padding: 15px 25px; */
    /* padding: 0 25px; */
}

.thread:nth-child(even) {
    background-color: var(--bg-light-1)
}
</style>