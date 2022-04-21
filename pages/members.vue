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
    background: rgba(0, 0, 0, 0.21);
    height: 1024px;
    flex: 1 0 auto;
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
</style>