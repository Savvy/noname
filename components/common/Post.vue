<template>
    <div class="post d-flex w-100">
        <div class="post-author d-flex align-center">
            <CommonAvatar :src="post.user.details.avatar" borderRadius="100px" :pointer=true />
            <div class="author">
                <nuxt-link :to="`/profile/${post.user.username}`">{{ post.user.username }}</nuxt-link>
                <div class="badges">
                    <CommonBadge :role="post.user.role" />
                </div>
            </div>
        </div>
        <div class="post-content w-auto">
            <div class="post-header d-flex flex-row justify-between">
                <span class="time"><time-ago refresh :long=true :datetime="post.updatedAt" /></span>
                <div class="actions">
                    <nuxt-link v-tooltip="'Share this thread'" to="/"><i class="bi bi-share"></i></nuxt-link>
                    <nuxt-link v-tooltip="'Bookmark thread'" to="/"><i class="bi bi-bookmark"></i></nuxt-link>
                    <nuxt-link v-tooltip="'Jump to'" :to='`#post-${index}`' :id='`post-${index}`' class="post-num">#{{ index }}</nuxt-link>
                </div>
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
    flex-direction: column;
}

.post-author .author {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    font-size: 1.4rem;
    font-weight: 500;
}

.post-author .author > .badges {
    margin-top: 5px;
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

.post-header .actions {
    display: flex;
    gap: 10px;
}

.post-content .post-body {
    margin: 15px 0;
    line-height: 1.4;
    font-family: var(--secondary-font);
}

.post-author .avatar {
    height: 95px;
    width: 95px;
}


@media screen and (max-width: 720px) {
    .post {
        flex-direction: column;
    }

    .post-author {
        width: 100%;
        flex-direction: row;
        gap: 15px;
        padding: 15px 25px;
    }

    .post-author .author {
        align-items: flex-start;
    }

    .post-author .avatar {
        width: 60px;
        height: 60px;
    }

    .author > a {
        font-size: 1.2rem;
    }
}
</style>