<template>
    <div id="profile">
        <div class="container">
            <div class="profile-header">
                <div class="profile-banner d-flex align-end" style="background-image: url('https://i.imgur.com/TTyvRvy.png');">
                    <div class="profile-socials">
                        <a href="https://twitter.com/" target="_blank"><i class="bi bi-twitter"></i></a>
                        <a href="https://facebook.com/" target="_blank"><i class="bi bi-facebook"></i></a>
                        <a href="https://instagram.com/" target="_blank"><i class="bi bi-instagram"></i></a>
                        <a href="https://malcom.sh/" target="_blank"><i class="bi bi-link-45deg"></i></a>
                    </div>
                    <div class="profile-stats d-flex justify-between align-center">
                        <div class="left">
                            <div class="user-name">{{ profile.username }}</div>
                            <div class="badges">
                                <div class="badge">Admin</div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="stats d-flex flex-row align-center">
                                <nuxt-link to="/profile" class="stat">
                                    {{ profile.threadCount }}
                                    <span>Threads</span>
                                </nuxt-link>
                                <nuxt-link to="/profile" class="stat">
                                    {{ profile.postCount }}
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
                <CommonAvatar :src="profile.details.avatar" borderRadius="100px" height="130px" width="130px" :pointer=false />
            </div>

            <div class="profile-content">
                <div class="tab-container">
                    <div class="tab-nav">
                        <div class="tab-btn" @click="activeTab = tab.id"
                        :class="{ active: (activeTab === tab.id) }"
                        v-for="(tab) in tabs" :key="tab.id">{{ tab.name }}</div>
                    </div>
                    <div class="tab-body">
                        <div class="tab-content" v-if="activeTab === 'latest-activity'">
                            User has had no activity recently.
                        </div>
                        <div class="tab-content" v-else-if="activeTab === 'info'">
                            No information to display.
                        </div>
                        <div class="tab-content" v-else-if="activeTab === 'wall-posts'">
                            <div class="new-post d-flex flex-row" v-if="isAuthenticated">
                                <CommonAvatar :src="user.details.avatar" borderRadius="5px" height="70px" width="70px" :pointer=false />
                                <div class="profile-editor">
                                    <client-only>
                                        <CommonRichEditor v-model="postContent" />
                                        <div id="submit" class="btn btn-primary" @click="post">Post</div>
                                    </client-only>
                                </div>
                            </div>
                            <div class="posts">
                                <CommonWallPost v-for="(post, index) in wallPosts" :post=post :key="index" v-on:updateWall="updateWallPosts" />
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
    head() {
        return {
            title: this.profile.username
        }
    },
    data() {
        return {
            postContent: '',
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
    },
    async asyncData({ params, store, $axios }) {
        if (store.state.auth.user && params.profile === store.state.auth.user.username) {
            return { profile: {...store.state.auth.user} }
        }
        const { data } = await $axios.get(`/user/find/${params.profile}`);
        return { profile: data.user };
    },
    computed: {
        wallPosts() {
            return this.profile.wallPosts.filter(post => !post.reply);
        }
    },
    methods: {
        async updateWallPosts() {
            const res = await this.$axios.get(`/user/find/${this.$route.params.profile}`);
            this.profile = res.data.user;
        },
        post() {
            if (this.postContent.length < 4) return;
            let data = {
                user: this.profile._id,
                author: this.user._id,
                content: this.postContent,
            };
            this.$axios.post('/comment', data).then((res) => res.data)
            .then(async (data) => {
                if (!data.success) {
                    console.log(data);
                    return;
                }
                this.postContent = '';
                this.updateWallPosts();
            });
        }
    }
}
</script>

<style scoped>
.posts {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.profile-editor {
    width: 100%;
}

.editor-container {
    margin-bottom: 15px;
}

.btn.btn-primary#submit {
    float: right;
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

.tab-content {
    color: var(--light-text);
}

.profile-header {
    height: 300px;
    width: 100%;
    position: relative;
    margin-bottom: 80px;
}

.profile-banner {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: var(--border-radius);
    overflow: hidden;
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
    margin-bottom: 30px;
}
.new-post .editor-container {
    flex: 1;
}

.profile-socials {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #fff;
    border-radius: var(--border-radius);
    background-color: var(--bg-dark-50);
    padding: 5px 10px;
    display: flex;
    gap: 8px;
}

.profile-socials a > i.bi-link-45deg {
    font-size: 18px;
}

.profile-socials a > i {
    display: block;
    transition: transform 0.25s ease-in-out;
}

.profile-socials a:hover > i {
    transform: translateY(-3px);
}
</style>