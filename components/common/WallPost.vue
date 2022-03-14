<template>
    <div class="post-container">
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
                        <div class="post-btn">Delete Comment</div>
                    </div>
                    <div class="right">
                        <div class="post-btn">Like</div>
                        <div class="post-btn">Comment</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="post-replies" v-for="(post, index) in post.children" :key="index">
            <CommonWallPostReply :post=post />
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'post' ]
}
</script>

<style scoped>
.post-replies {
    padding-left: 40px;
}
.post, .post-container {
    padding: 10px;
}

.post-container {
    gap: 5px;
    flex-direction: column;
}

.post {
    gap: 15px;
    border-radius: var(--border-radius);
    background-color: var(--bg-dark-10);
}

.post,
.post-container,
.post-body {
    width: 100%;
}

.post-content {
    color: var(--primary-color);
    margin: 10px 0;
}

.post-author {
    font-weight: 600;
}

.post,
.post-container,
.post-footer,
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