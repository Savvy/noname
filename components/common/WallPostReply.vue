<template>
    <div class="post">
            <CommonAvatar src="https://i.imgur.com/rzuOBa8.png" borderRadius="5px" height="70px" width="70px" :pointer=false />
        <div class="post-body">
            <div class="post-author">
                <nuxt-link :to="`/profile/${post.author.username}`">{{ post.author.username }}</nuxt-link>
            </div>
            <div class="post-content" v-html="post.content"></div>
            <div class="post-footer">
                <div class="left">
                    <span class="time"><time-ago refresh :long=true :datetime="post.updatedAt" /></span>
                    <div class="post-btn" @click="deleteComment">Delete Comment</div>
                </div>
                <div class="right">
                    <div class="post-btn">Like</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'post' ],
    methods: {
        deleteComment() {
            this.$axios.delete('/comment', { data: { id: this.post._id} });
        }
    }
}
</script>

<style scoped>
.post {
    gap: 15px;
    background-color: var(--bg-dark-10);
    border-radius: var(--border-radius);
    padding: 10px;
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
    align-items: center;
    gap: 10px;
}

.post-footer {
    color: var(--light-text);
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
}

.post-btn {
    cursor: pointer;
}

.post-btn:hover {
    text-decoration: underline;
}
</style>