<template>
    <div class="forum">
        <div class="header d-flex justify-between align-center w-100">
            <div class="left">
                <div class="header-title">Home <span>/</span> News & Announcements</div>
                <div class="header-description">The latest news and announcements regarding the community.</div>
            </div>
            <div class="right d-flex flex-row">
                <div class="btn">Sort By <i class="bi bi-caret-down-fill"></i></div>
                <div class="btn btn-primary">Log in to post</div>
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
            <CommonThread v-for="index in 10" :key="index" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showPagination: true
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

.header {
    position: relative;
    padding: 15px 25px;
    background-color: var(--header-color);
    color: var(--primary-color);
    border-radius: var(--border-radius);
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

.body {
    background-color: var(--body-color);
    /* padding: 15px 25px; */
    /* padding: 0 25px; */
    border-radius: var(--border-radius);
}

.thread:nth-child(even) {
    background-color: var(--bg-light-1)
}
</style>