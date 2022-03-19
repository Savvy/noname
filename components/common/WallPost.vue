<template>
    <div class="post-container">
        <div class="post">
            <CommonAvatar :src="post.author.details.avatar" borderRadius="5px" height="70px" width="70px" :pointer=false />
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
                        <div class="post-btn" v-if="canLike" @click="likeComment"><i class="bi bi-hand-thumbs-up"></i> {{ post.like.includes(user._id) ? 'Unlike' : 'Like' }}</div>
                        <div class="post-btn" v-else>{{ post.like.length }} Likes</div>
                        <div class="post-btn" @click="commentEnabled = !commentEnabled">Comment</div>
                    </div>
                </div>
            </div>
        </div>
        <collapse-transition>
            <div class="profile-editor" v-if="commentEnabled">
                <client-only>
                    <CommonRichEditor v-model="postContent" />
                    <div id="submit" class="btn btn-primary" @click="postComment">Post</div>
                </client-only>
            </div>
        </collapse-transition>
        <div class="post-replies" v-for="(post, index) in post.children" :key="index">
            <CommonWallPostReply :post=post  v-on:updateWall="emitUpdate" />
        </div>
    </div>
</template>

<script>
import { CollapseTransition } from "@ivanv/vue-collapse-transition"
export default {
    components: { CollapseTransition },
    props: [ 'post' ],
    data() {
        return {
            postContent: '',
            commentEnabled: false,
        }
    },
    computed: {
        canLike() {
            return this.user && this.post.author.username !== this.user.username
        }
    },
    methods: {
        emitUpdate() {
            this.$emit('updateWall');
        },
        likeComment() {
            this.$axios.post('/comment/like', { id: this.post._id })
            .then((res) => res.data).then((data) => {
                console.log(data);
                this.emitUpdate();
            });
        },
        deleteComment() {
            this.$axios.delete('/comment', { data: { id: this.post._id} });
            this.emitUpdate();
        },
        postComment() {
            if (this.postContent.length < 4) return;
            let data = {
                user: this.post.user._id,
                author: this.user._id,
                content: this.postContent,
                parent: this.post._id
            };
            this.$axios.post('/comment', data).then((res) => res.data)
            .then(async (data) => {
                if (!data.success) {
                    console.log(data);
                    return;
                }
                this.postContent = '';
                this.$emit('updateWall');
                this.commentEnabled = false;
            });
        }
    }
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

.btn.btn-primary#submit {
    float: right;
}

</style>