<template>
    <CommonSideWidget>
        <template v-slot:widget-header>Online Members <span>({{ onlineUsers.length }})</span></template>
        <template v-slot:widget-body>
            <div class="online-users d-flex" v-if="onlineUsers.length > 0">
                <nuxt-link :to="`/profile/${online.username}`" v-tooltip="online.username"
                v-for="(online, index) in onlineUsers" :key="index">
                    <CommonAvatar :src="online.details.avatar" borderRadius="100px" height="40px" width="40px" 
                    :pointer=true :shrinkOnHover=true />
                </nuxt-link>
            </div>
            <div class="online-users d-flex" v-else>
                <h5>No online users</h5>
            </div>
        </template>
    </CommonSideWidget>
</template>

<script>
export default {
    data() {
        return {
            onlineUsers: {},
        }
    },
    async mounted() {
        let {data} = await this.$axios.get('/module/online');
        this.onlineUsers = data.users;
    },
}
</script>

<style scoped>
.widget-header span {
    font-size: 15px;
}
.online-users {
    flex-wrap: wrap;
    gap: 10px;
}

h5 {
    color: var(--primary-color);
    font-weight: 500;
    font-size: 15px;
}
</style>