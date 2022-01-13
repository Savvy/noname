<template>
    <div id="create-thread">
        <div class="container">
            <div class="header d-flex justify-between align-center w-100">
                <div class="left">
                    <div class="header-title">Create Thread</div>
                    <div class="header-description">Thread in <nuxt-link to="/category">News & Announcements</nuxt-link></div>
                </div>
                <div class="right d-flex flex-row">
                </div>
            </div>
            <div class="input-group">
                <input type="text" v-model="thread.title" name="thread-title" placeholder="Thread title..." class="input-default">
            </div>
            <client-only>
                <CommonRichEditor btn-text="Create Thread" />
            </client-only>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            thread: {
                title: '',
            }
        }
    }
}
</script>

<style scoped>
.header {
    margin-bottom: 30px;
}

.input-group {
    margin-bottom: 10px;
    max-width: 100%;
    width: 100%;
}
</style>