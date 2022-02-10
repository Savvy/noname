<template>
    <div class="post d-flex w-100">
        <div class="post-author d-flex align-center flex-column">
            <CommonAvatar src="https://i.imgur.com/rzuOBa8.png" borderRadius="100px" height="95px" width="95px" :pointer=true />
            <div class="author"><nuxt-link :to="`/profile/${post.user.username}`">{{ post.user.username }}</nuxt-link></div>
            <div class="badges">
                <div class="badge">Admin</div>
            </div>
        </div>
        <div class="post-content w-auto">
            <div class="post-header d-flex flex-row justify-between">
                <span class="time"><time-ago refresh :long=true :datetime="post.updatedAt" /></span>
                <nuxt-link :to='`#post-${index}`' :id='`post-${index}`' class="post-num">#{{ index }}</nuxt-link>
            </div>
            <div class="post-body" v-html="post.content">
            </div>
            <div class="post-footer d-flex flex-row justify-between"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        },
        /* avatar: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: false,
            default: 'Member'
        },
        threadAuthor: {
            type: Boolean,
            required: false,
            default: false,
        }, */
        index: {
            type: Number,
            required: true,
            default: 999
        }
    }
}
</script>

<style scoped>
.post {
    background-color: var(--body-color);
    margin-bottom: 20px;
    border-radius: var(--border-radius);
    overflow: hidden;
}

.post-author {
    width: 200px;
    min-width: 200px;
    background-color: var(--header-color);
    padding: 25px 0;
    color: var(--light-text);
    text-align: center;
}

.post-author .author {
    margin: 10px 0 10px 0;
    font-size: 1.4rem;
    font-weight: 500;
}

.post-content {
    flex: 1;
    color: var(--light-text);
    padding: 15px;
}

.post-content .post-header {
    opacity: 0.6;
    font-size: 13px;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--bg-light-10);
}

.post-content .post-body {
    margin: 15px 0;
    line-height: 1.4;
    font-family: var(--secondary-font);
}
</style>