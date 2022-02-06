<template>
    <div id="category">
        <div class="container">
            <CommonCategoryForum :forum="forum" />
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Category'
        }
    },
    data(){ 
        return {
        }
    },
    async asyncData({ $axios, route }) {
        let { data } = await $axios.get(`/forum/${route.params.slug}`);
        return { forum: data.result };
    }
}
</script>