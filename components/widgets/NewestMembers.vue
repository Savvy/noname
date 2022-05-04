<template>
    <CommonSideWidget>
        <template v-slot:widget-header>Newest Members</template>
        <template v-slot:widget-body>
            <div class="recent-users d-flex" v-if="recentUsers.length > 0">
                <nuxt-link :to="`/profile/${recent.username}`" v-tooltip="recent.username"
                v-for="(recent, index) in recentUsers" :key="index">
                    <CommonAvatar :src="userAvatar(recent.details)" borderRadius="100px" height="40px" width="40px" 
                    :pointer=true :shrinkOnHover=true />
                </nuxt-link>
            </div>
            <div class="recent-users d-flex" v-else>
                <h5>No new users</h5>
            </div>
        </template>
    </CommonSideWidget>
</template>

<script>
export default {
    data() {
        return {
            recentUsers: {},
        }
    },
    async mounted() {
        let {data} = await this.$axios.get('/module/recentusers');
        this.recentUsers = data.users;
    },
}
</script>

<style scoped>
.widget-header span {
    font-size: 15px;
}
.recent-users {
    flex-wrap: wrap;
    gap: 10px;
}

h5 {
    color: var(--primary-color);
    font-weight: 500;
    font-size: 15px;
}
</style>