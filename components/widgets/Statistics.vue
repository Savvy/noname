<template>
    <CommonSideWidget>
        <template v-slot:widget-header>Statistics</template>
        <template v-slot:widget-body>
            <div class="stats w-100 d-flex flex-column">
                <div class="stat">Threads: <span>{{ stats.threadCount }}</span></div>
                <div class="stat">Posts: <span>{{ stats.postCount }}</span></div>
                <div class="stat">Members: <span>{{ stats.memberCount }}</span></div>
                <div class="stat">Newest Member: <nuxt-link :to='"/profile/" + stats.latestName'>{{ stats.latestName }}</nuxt-link></div>
            </div>
        </template>
    </CommonSideWidget>
</template>

<script>
export default {
    data() {
        return {
            stats: {},
        }
    },
    async mounted() {
        let {data} = await this.$axios.get('/module/statistics');
        this.stats = {
            threadCount: data.threadCount,
            postCount: data.postCount,
            memberCount: data.memberCount,
            latestName: data.latestUser.username,
            latestId: data.latestUser._id
        };
    },
}
</script>

<style scoped>
.stats {
    color: var(--primary-color);
    font-size: 15px;
    gap: 3px;
}

.stat {
    display: flex;
    justify-content: space-between;
}

.stat span,
.stat a {
    font-weight: 500;
}
</style>