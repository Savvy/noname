<template>
    <div class="category d-flex align-center">
        <div class="icon"><i class="bi bi-megaphone"></i></div>
        <div class="category-info w-auto">
            <nuxt-link to="/" class="category-title">News & Announcements</nuxt-link>
            <div class="category-meta">Topics: <span>481</span> Posts: <span>1028</span></div>
        </div>
        <div class="recent-thread d-flex flex-row">
            <CommonAvatar src="https://i.imgur.com/45vM6qK.jpg" borderRadius="100px" height="40px" width="40px" :pointer=true />
            <div class="thread-info d-flex flex-column">
                <div class="thread-title">New API Changes</div>
                <div class="thread-meta">
                    <nuxt-link to="/">Chroma</nuxt-link><span class="time">3 days ago</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.category {
    padding: 15px 20px;
}

.category > .icon {
    margin-right: 15px;
    font-size: 32px;
}

.icon > i {
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.category-title {
    color: var(--light-text);
    font-size: 1.15rem;
}

.category-meta {
    font-size: 0.88rem;
    color: var(--primary-color);
}

.category-meta span {
    font-weight: 600;
}
</style>