<template>
    <div class="thread d-flex w-100 align-center">
        <div class="thread-head d-flex align-center w-auto">
            <div class="thread-avatar">
                <nuxt-link to="/profile">
                    <CommonAvatar :src="thread.user.details.avatar" borderRadius="100px" height="50px" width="50px" :pointer=true />
                </nuxt-link>
            </div>
            <div class="thread-meta d-flex flex-column">
                <nuxt-link :to="`/threads/${thread.threadId}`" class="thread-title">{{ thread.title }}</nuxt-link>
                <div class="thread-creator d-flex align-center" v-if="thread">
                    <nuxt-link :to="'/profile/' + thread.user.username">{{ thread.user.username }}</nuxt-link>
                    <span class="sep"></span>
                    <span class="time"><time-ago refresh :long=true :datetime="thread.createdAt"/></span>
                </div>
            </div>
        </div>
        <!-- <div class="thread-stats d-flex">
            <div class="d-flex align-center justify-center flex-column">
                <span>9</span>
                Upvotes
            </div>
            <div class="d-flex align-center justify-center flex-column">
                <span>10</span>
                Posts
            </div>
            <div class="d-flex align-center justify-center flex-column">
                <span>49</span>
                Views
            </div>
        </div> -->
        <div class="thread-recent d-flex align-center">
            <div class="recent-info d-flex flex-column justify-end">
                <nuxt-link :to="`/profile/${recentUser.username}`" class="user">{{ recentUser.username }}</nuxt-link>
                <nuxt-link :to="`/profile/${recentUser.username}`" class="time"><time-ago refresh :long=true :datetime="recentPost.updatedAt"/></nuxt-link>
            </div>
            <nuxt-link class="recent-avatar" :to="`/profile/${recentUser.username}`">
                <CommonAvatar :src="recentUser.details.avatar" borderRadius="100px" height="40px" width="40px" :pointer=true />
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    props: ['thread', 'recent_thread', 'recent_post'],
    computed: {
        recentPost() {
            return this.recent_post ? this.recent_post : this.thread;
        },
        recentUser() {
            return this.recent_post ? this.recent_post.user : this.thread.user;
        }
    }
}
</script>

<style scoped>
.thread {
    padding: 15px 25px;
    gap: 12px;
}

.thread-head {
    gap: 12px;
}

.thread-title {
    color: var(--light-text);
    font-size: 1.15rem;
}

.thread-meta {
    font-size: 0.88rem;
    gap: 3px;
}

.time span {
    color: var(--light-text);
}

span.time, span.time span {
    color: var(--primary-color);
}

.thread-stats {
    gap: 40px;
    color: var(--primary-color);
    text-align: center;
    font-weight: 400;
}

.thread-stats span {
    font-weight: 700;
}

.thread-recent {
    width: 250px;
    gap: 12px;
    justify-content: flex-end;
}

.recent-border {
    height: 100%;
    min-height: 10px;
    min-width: 5px;
    width: 5px;
    background-color: var(--primary-color);
    border-radius: 5px 0 0 5px;
}

.recent-info {
    font-size: 0.85rem;
    text-align: right;
}

@media (max-width: 720px) {
    .thread-stats {
        display: none;
    }

    .thread-creator {
        flex-direction: column;
        align-items: flex-start;
    }

    .thread-creator > .sep {
        display: none;
    }

    .thread-recent {
        display: none;
    }
}

</style>