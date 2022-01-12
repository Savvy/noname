<template>
    <div id="profile">
        <div class="container">
            <div class="profile-header">
                <div class="profile-banner d-flex align-end" style="background-image: url('https://i.imgur.com/wfEx9HF.jpg');">
                    <div class="profile-stats d-flex justify-between align-center">
                        <div class="left">
                            <div class="user-name">Cyber</div>
                            <div class="badges">
                                <div class="badge">Admin</div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="stats d-flex flex-row align-center">
                                <nuxt-link to="/profile" class="stat">
                                    28
                                    <span>Threads</span>
                                </nuxt-link>
                                <nuxt-link to="/profile" class="stat">
                                    102
                                    <span>Posts</span>
                                </nuxt-link>
                                <nuxt-link to="/profile" class="stat">
                                    972
                                    <span>Upvotes</span>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
                <CommonAvatar src="https://i.imgur.com/rzuOBa8.png" borderRadius="100px" height="130px" width="130px" :pointer=false />
            </div>

            <div class="profile-content">
                <div class="tab-container">
                    <div class="tab-nav">
                        <div class="tab-btn" @click="activeTab = tab.id"
                        :class="{ active: (activeTab === tab.id) }"
                        v-for="(tab) in tabs" :key="tab.id">{{ tab.name }}</div>
                    </div>
                    <div class="tab-body">
                        <div class="tab-content" v-if="activeTab === 'wall-posts'">
                            <div class="new-post d-flex flex-row">
                                <CommonAvatar src="https://i.imgur.com/rzuOBa8.pngg" borderRadius="5px" height="70px" width="70px" :pointer=false />
                                <client-only>
                                    <CommonRichEditor btn-text="Post" />
                                </client-only>
                            </div>
                            <div class="posts">
                                <div class="post">
                                    <CommonAvatar src="https://i.imgur.com/rzuOBa8.png" borderRadius="5px" height="70px" width="70px" :pointer=false />
                                    <div class="post-body">
                                        <div class="post-author">
                                            <nuxt-link to="/profile">Makoto</nuxt-link>
                                        </div>
                                        <div class="post-content">
                                            <p>Welcome to my post...</p>
                                        </div>
                                        <div class="post-footer">
                                            <div class="left">
                                                <span class="time">Jan 1, 2022</span>
                                                <div class="post-btn">Delete Comment</div>
                                            </div>
                                            <div class="right">
                                                <div class="post-btn">Upvote</div>
                                                <div class="post-btn">Comment</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 'wall-posts',
            tabs: [
            {
                id: 'wall-posts',
                name: 'Wall Posts'
            },
            {
                id: 'latest-activity',
                name: 'Latest Activity'
            },
            {
                id: 'info',
                name: 'Information'
            }]
        }
    }
}
</script>

<style scoped>
.post {
    gap: 15px;
}

.post, .post-body {
    width: 100%;
}

.post-content {
    color: var(--primary-color);
    margin: 10px 0;
}

.post-author {
    font-weight: 600;
}

.post, .post-footer,
.post-footer .left,
.post-footer .right {
    display: flex;
}

.post-footer .left,
.post-footer .right {
    gap: 10px;
}

.post-footer {
    color: var(--light-text);
    justify-content: space-between;
    font-size: 12px;
}

.post-btn {
    cursor: pointer;
}

.post-btn:hover {
    text-decoration: underline;
}

.tab-nav {
    width: 100%;
    background-color: var(--bg-dark-color);
    display: flex;
    flex-direction: row;
    color: var(--light-text);
}

.tab-btn {
    padding: 25px 30px;
    cursor: pointer;
    user-select: none;
    transition: opacity 0.15s ease-in-out;
}

.tab-btn:not(.active):hover {
    opacity: 0.7;
}

.tab-btn.active {
    background-color: var(--bg-light-5);
}

.tab-body::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--bg-dark-color);
    z-index: -1;
}

.tab-body {
    position: relative;
    background-color: var(--bg-light-5);
    padding: 15px;
}

.profile-header {
    height: 300px;
    width: 100%;
    position: relative;
    margin-bottom: 120px;
}

.profile-banner {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: var(--border-radius);
}

.profile-header .avatar {
    position: absolute;
    bottom: -45px;
    left: 40px;
    border: 5px solid var(--bg-color);
}

.profile-stats {
    width: 100%;
    background-color: var(--bg-dark-50);
    padding: 10px 40px 10px 190px;
    color: var(--light-text);
}

.user-name {
    font-weight: 800;
    font-size: 1.65rem;
    margin-bottom: 5px;
}

.stats {
    gap: 30px;
}
.stat {
    font-weight: 600;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    font-size: 20px;
    gap: 2px;
    text-decoration: none;
    transition: opacity 0.25s ease-in-out;
}

.stat:hover {
    opacity: 0.8;
}

.stat span {
    font-size: initial;
    font-weight: 300;
}

.new-post {
    gap: 15px;
}
.new-post .editor-container {
    flex: 1;
}
</style>