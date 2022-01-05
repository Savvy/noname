<template>
    <div class="container">
        <div class="thread">
            <div class="header d-flex justify-between align-center w-100">
                <div class="left">
                    <div class="header-title">Update Log #39</div>
                    <div class="header-description">Thread in <nuxt-link to="/category">News & Announcements</nuxt-link> started by <nuxt-link to="/profile">Cyber</nuxt-link>, <span class="time">Today at 2:58 PM</span></div>
                </div>
                <div class="right d-flex flex-row">
                    <div class="btn btn-primary">Share <i class="bi bi-caret-down-fill"></i></div>
                </div>
            </div>
            <div class="sub-header d-flex w-100" v-if="showPagination">
                <div class="pagination">
                    <div class="btn btn-default btn-prev"><i class="bi bi-chevron-double-left"></i></div>
                    <div class="btn btn-default btn-page">1</div>
                    <div class="btn btn-default btn-next"><i class="bi bi-chevron-double-right"></i></div>
                </div>
            </div>
            <div class="body w-100">
                <CommonPost avatar="https://i.imgur.com/rzuOBa8.png" name="Cyber" role="Admin" :threadAuthor=true />
                <CommonPost avatar="https://i.imgur.com/dhAaUje.jpg" name="Meiyo" role="Moderator" />
                <CommonPost avatar="https://i.imgur.com/45vM6qK.jpg" name="Random" />
            </div>
            <client-only>
                <CommonRichEditor />
            </client-only>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        showPagination() {
            return true;
        }
    }
}
</script>

<style scoped>
.header {
    position: relative;
    padding: 15px 25px;
    border-radius: 5px;
    background-color: var(--header-color);
    color: var(--primary-color);
}

.header .right {
    gap: 10px;
}

.header .header-title {
    font-weight: 500;
    font-size: 20px;
    color: var(--light-text);
}

.header .header-description {
    margin-top: 5px;
    font-size: 14px;
    opacity: 0.75;
}

.btn i {
    margin-right: 0;
}

.sub-header {
    margin: 10px 0;
}
</style>