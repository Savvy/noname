<template>
    <nuxt-link to="/thread" class="thread-container">
        <div class="thread d-flex align-end" :style="styleBinding">
            <div class="title w-100">New API Changes</div>
        </div>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            required: true
        }
    },
    computed: {
        styleBinding() {
            return {
                backgroundImage: `url(${this.image})`
            }
        }
    }
}
</script>

<style scoped>
.thread {
    max-height: 350px;
    min-height: 350px;
    height: 100%;
    width: 100%;
    background-color: var(--primary-color);
    border-radius: var(--border-radius);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: opacity 0.25s ease-in-out, transform 0.25s ease-in-out;
    cursor: pointer;
    text-decoration: none;
}

.thread:hover {
    opacity: 0.85;
    transform: scale(0.95);
}

.thread-container {
    flex: 1 0 auto;
}
@media screen and (max-width: 720px) {
    .thread-container {
        width: 100%;
    }
}

.title {
    text-align: center;
    background-color: var(--bg-dark-50);
    padding: 10px 0;
    color: var(--light-text);
}
</style>