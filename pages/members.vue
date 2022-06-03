<template>
    <div class="container">
        <div id="members">
            <div class="sidebar-container">
                <div class="sidebar">
                    <div class="members-nav">
                        <div class="members-header">Members</div>
                        <div class="members-body">
                            <div class="nav-item">Overview</div>
                        </div>
                    </div>
                    <WidgetsNewestMembers />
                </div>
            </div>
            <div class="members-content">
                <div class="members-container">
                    <h2>Staff Members</h2>
                    <div class="members-block">
                        <CommonMemberBlock v-for="(member, index) in staff" :member="member" :key="index" />
                    </div>
                </div>

                <div class="members-container">
                    <h2>Members</h2>
                    <div class="members-block">
                        <CommonMemberBlock v-for="(member, index) in members" :member="member" :key="index" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Members List'
        }
    },
    async asyncData({ $axios, }) {
        let { data } = await $axios.get(`/user/members`);
        return { staff: data.staff, members: data.members };
    },
}
</script>

<style scoped>
#members {
    display: flex;
    gap: 20px;
}

.sidebar-container {
    position: relative;
    width: 290px;
}

.sidebar {
    width: 290px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: fixed;
}

.members-content {
    flex: 1;
}

.members-nav {
    width: 100%;
    border-radius: var(--border-radius);
    overflow: hidden;
}

.members-header {
    position: relative;
    padding: 15px 25px;
    background-color: var(--header-color);
    color: var(--primary-color);
    font-size: 20px;
}

.members-body {
    background-color: var(--body-color);
    padding: 15px 25px;
    height: 100%;
}

.nav-item {
    cursor: pointer;
    color: var(--light-text);
}

.members-container {
    margin-bottom: 25px;
}

.members-block {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 15px;
    margin-top: 15px;
}
</style>