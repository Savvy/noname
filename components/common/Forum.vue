<template>
    <div class="forum">
        <div class="header">
            <nuxt-link :to="'#official-forums-' + id" :id="'official-forums-' + id" class="header-title">Official Forums</nuxt-link>
            <i class="bi bi-chevron-down" @click="hide = !hide "></i>
        </div>
        <div class="body w-100" :class="{ collapse: hide }">
            <CommonCategory />
            <CommonCategory />
            <CommonCategory />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        hidden: {
            type: Boolean,
            default: false
        },
        id: {
            type: Number,
            required: false,
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
    border-radius: 5px;
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