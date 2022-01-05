<template>
    <div class="thread d-flex w-100 align-center">
        <div class="thread-head d-flex align-center w-auto">
            <div class="thread-avatar">
                <CommonAvatar src="https://i.imgur.com/45vM6qK.jpg" borderRadius="100px" height="50px" width="50px" :pointer=true />
            </div>
            <div class="thread-meta d-flex flex-column">
                <nuxt-link to="/thread" class="thread-title">Update Log #39</nuxt-link>
                <div class="thread-creator d-flex align-center">
                    <nuxt-link to="/">Chroma</nuxt-link>
                    <span class="sep"></span>
                    <span class="time">3 days ago</span>
                </div>
            </div>
        </div>
        <div class="thread-stats d-flex">
            <div class="d-flex align-center justify-center flex-column">
                <span>9</span>
                Upvotes
            </div>
            <div class="d-flex align-center justify-center flex-column">
                <span>10</span>
                Posts
            </div>
            <div class="d-flex align-center justify-center flex-column">
                <span>49</span>
                Views
            </div>
        </div>
        <div class="thread-recent d-flex align-center justify-end">
            <!-- <div class="recent-border"></div> -->
            <div class="recent-info d-flex flex-column justify-end">
                <nuxt-link to="/" class="user">Chroma</nuxt-link>
                <nuxt-link to="/#asdas" class="time">Jan 2, 2020 at 10:43 PM</nuxt-link>
            </div>
            <CommonAvatar src="https://i.imgur.com/45vM6qK.jpg" borderRadius="100px" height="30px" width="30px" :pointer=true />
        </div>
    </div>
</template>

<style scoped>
.thread {
    padding: 15px 25px;
    gap: 12px;
}

.thread-head {
    gap: 12px;
}

.thread-title {
    color: var(--light-text);
    font-size: 1.15rem;
}

.thread-meta {
    font-size: 0.88rem;
    gap: 3px;
}

span.time {
    color: var(--primary-color);
}

.thread-stats {
    gap: 40px;
    color: var(--primary-color);
    text-align: center;
    font-weight: 400;
}

.thread-stats span {
    font-weight: 700;
}

.thread-recent {
    width: 250px;
    gap: 12px;
}

.recent-border {
    height: 100%;
    min-height: 10px;
    min-width: 5px;
    width: 5px;
    background-color: var(--primary-color);
    border-radius: 5px 0 0 5px;
}

.recent-info {
    font-size: 0.85rem;
    text-align: right;
}
</style>