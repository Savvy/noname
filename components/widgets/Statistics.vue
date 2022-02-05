<template>
    <CommonSideWidget>
        <template v-slot:widget-header>Statistics</template>
        <template v-slot:widget-body>
           <div class="stats w-100 d-flex flex-column">
               <div class="stat">Threads: <span>{{ stats.threadCount }}</span></div>
               <div class="stat">Posts: <span>{{ stats.postCount }}</span></div>
               <div class="stat">Members: <span>{{ stats.memberCount }}</span></div>
               <!-- <div class="stat">Newest Member: <nuxt-link :to='"/profile/" + stats.latestUser.username'>{{ stats.latestUser.username }}</nuxt-link></div> -->
           </div>
        </template>
    </CommonSideWidget>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            stats: {},
            /* latestMember: null,
            threadCount: 0,
            postCount: 0,
            memberCount: 0, */
        }
    },
    async mounted() {
        let {data} = await this.$axios.get('/module/statistics');
        delete data.success;
        this.$store.dispatch('widget/setData', { name: 'stats', data });
        this.stats = data;
        console.log(this.stats)
        /* this.latestMember = data.latestUser;
        this.threadCount = data.threadCount;
        this.postCount = data.postCount;
        this.memberCount = data.memberCount; */
    },
    computed: {
        ...mapGetters({
            getData: "widget/getData"
        }),
    },
    methods: {
        widget() {
            console.log(this.getData('stats'));
            return this.getData('stats');
        }
    }
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