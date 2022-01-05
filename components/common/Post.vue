<template>
    <div class="post d-flex w-100">
        <div class="post-author d-flex align-center flex-column">
            <CommonAvatar :src="post.avatar" borderRadius="100px" height="95px" width="95px" :pointer=true />
            <div class="author"><nuxt-link to="/profile">{{ post.author }}</nuxt-link></div>
            <div class="badges">
                <div class="badge">{{ post.role }}</div>
            </div>
        </div>
        <div class="post-content w-auto">
            <div class="post-header d-flex flex-row justify-between">
                <span class="time">Today at 2:58 PM</span>
                <nuxt-link :to='`#post-${index}`' :id='`post-${index}`' class="post-num">#{{ index }}</nuxt-link>
            </div>
            <div class="post-body">
                <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut varius elementum nunc, sed laoreet turpis. Vestibulum sed metus nec risus suscipit dapibus. Mauris cursus augue quis lacus vulputate pharetra. In ornare efficitur massa vel molestie. Donec eget laoreet arcu. Aenean feugiat libero id massa ultricies dignissim. Curabitur tempor elit lacus, vitae dignissim turpis dapibus nec. Suspendisse potenti. Mauris efficitur congue tellus nec egestas. Aliquam feugiat velit et porta mattis. Aliquam non quam sed erat commodo dictum id non urna. Integer vitae elit commodo, feugiat augue eget, faucibus orci. Pellentesque commodo, eros vel fermentum blandit, eros sem dignissim urna, sit amet vulputate tellus massa dictum odio. Curabitur eget facilisis ligula. Nunc leo leo, posuere in libero non, ornare porttitor ipsum. Vivamus malesuada vel nisi non commodo.
                </p>
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