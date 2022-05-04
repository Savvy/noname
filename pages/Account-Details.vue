<template>
    <div id="account-details">
        <div class="container d-flex flex-row">
            <div class="sidebar left">
                <div class="nav">
                    <div class="nav-section">
                        <div class="nav-title">
                            Your Account
                        </div>
                        <div class="sidenav-links">
                            <nuxt-link class="sidenav-btn" :to="'/profile/' + user.username">Your Profile</nuxt-link>
                            <div class="sidenav-btn">Alerts</div>
                            <div class="sidenav-btn">Conversations</div>
                            <div class="sidenav-btn">Saved Threads</div>
                        </div>
                    </div>
                    <div class="nav-section">
                        <div class="nav-title">
                            Account Settings
                        </div>
                        <div class="sidenav-links">
                            <div class="sidenav-btn" v-for="(tab, index) in tabs" :key="index" 
                            :class="{ active: activeTab === tab.name }" 
                            @click="activeTab = tab.name">{{ tab.display }}</div>
                            <div class="sidenav-btn danger" @click="logout">Log out</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="body">
                <AccountDetails v-if="activeTab === 'account-details'"/>
                <AccountPasswordSecurity v-else-if="activeTab === 'password-security'"/>
                <AccountPrivacy v-else-if="activeTab === 'privacy'"/>
                <AccountSocialConnections v-else-if="activeTab === 'social-connections'"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    middleware: 'authRequired',
    head() {
        return {
            title: 'Account Details'
        }
    },
    data() {
        return {
            activeTab: 'account-details',
            tabs: [
                {
                    name: 'account-details',
                    display: 'Account Details'
                },
                {
                    name: 'password-security',
                    display: 'Password & Security'
                },
                {
                    name: 'privacy',
                    display: 'Privacy'
                },
                {
                    name: 'social-connections',
                    display: 'Social Connections'
                }
            ]
        }
    }
}
</script>

<style scoped>

#account-details > .container {
    gap: 15px;
}

.sidebar, .body {
    color: var(--light-text);
}

.sidebar {
    background-color: var(--bg-dark-color);
    border-radius: var(--border-radius);
    font-weight: 400;
    height: 100%;
    max-width: 325px;
    width: 100%;
    overflow: hidden;
}

.nav-section {
    margin-bottom: 10px;
}

.body {
    flex: 1;
    background-color: var(--bg-color);
    padding: 15px;
    border-radius: var(--border-radius);
}

.sidenav-links {
    display: flex;
    flex-direction: column;
}

.nav-title,
.sidenav-btn {
    padding: 12px 15px;
}

.nav-title {
    font-size: 1.15rem;
    font-weight: bold;
}

.sidenav-btn {
    border-left: 3px solid transparent;
    user-select: none;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
    font-size: 0.95rem;
    opacity: 0.7;
    text-decoration: none;
}

.sidenav-btn:hover,
.sidenav-btn.active {
    background-color: var(--bg-light-5);
    color: var(--primary-color);
    opacity: 1;
}

.sidenav-btn.active {
    border-color: var(--primary-color);
}

.sidenav-btn.danger:hover {
    color: var(--light-text);
    background-color: var(--danger-mid-color);
}

.sidenav-btn.danger {
    color: var(--danger-color);
}
</style>