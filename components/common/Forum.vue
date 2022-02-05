<template>
    <div class="forum">
        <div class="header">
            <nuxt-link :to="'#' + category.slug" :id="category.slug" class="header-title">{{ category.name }}</nuxt-link>
            <i class="bi bi-chevron-down" @click="hide = !hide "></i>
        </div>
        <collapse-transition>
            <div class="body w-100" v-if="!hide">
                <CommonCategory v-for="forum in category.forums" :key="forum.slug" />
            </div>
        </collapse-transition>
    </div>
</template>

<script>
import { CollapseTransition } from "@ivanv/vue-collapse-transition"
export default {
    components: { CollapseTransition },
    props: {
        /* hidden: {
            type: Boolean,
            default: false
        }, */
        category: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            hide: false,
        }
    }
}
</script>

<style scoped>
.forum {
    margin-bottom: 15px;
    border-radius: var(--border-radius);
    overflow: hidden;
}
.header {
    position: relative;
    padding: 15px 25px;
    font-size: 20px;
    background-color: var(--header-color);
}

.header > .header-title {
    color: var(--primary-color);
}

i {
    position: absolute;
    top: 50%;
    right: 25px;;
    transform: translateY(-50%);
    color: var(--primary-color);
    font-size: 18px;
    cursor: pointer;
}

.body {
    background-color: var(--body-color);
    height: 100%;
    max-height: 10000px;
    transition: max-height 0.85s ease-in-out;
}

.collapse {
    max-height: 0;
}

.category:nth-child(even) {
    background-color: var(--bg-light-5);
}
</style>