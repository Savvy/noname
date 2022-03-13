<template>
    <nav class="w-100">
        <div class="navigation container d-flex justify-between align-center">
            <nuxt-link to="/" class="brand">{{ $config.SITE_NAME }}</nuxt-link>
            <div class="nav">
                <CommonSearch />
                <div class="user-nav d-flex flex-row align-center">
                    <div class="alerts d-flex flex-row" v-if="user">
                        <div class="dropdown-container">
                            <a class="nav-btn dropdown" @click="toggleAlerts">
                                <i class="bi bi-bell"></i>
                            </a>
                            <CommonNavDropdown v-if="showAlerts" v-on-clickaway="closeAlerts">
                                <template v-slot:data-empty>
                                    <div class="data-empty">No recent alerts</div>
                                </template>
                                <template v-slot:dropdown-footer>
                                    <div class="dropdown-footer">
                                        <div class="btns">
                                            <div class="btn btn-default">Show All</div>
                                        </div>
                                    </div>
                                </template>
                            </CommonNavDropdown>
                        </div>
                        <div class="dropdown-container">
                            <a class="nav-btn dropdown" @click="toggleConversations">
                                <i class="bi bi-envelope"></i>
                            </a>
                            <CommonNavDropdown v-if="showConversations" v-on-clickaway="closeConversations">
                                <template v-slot:data-empty>
                                    <div class="data-empty">No new conversations</div>
                                </template>
                                <template v-slot:dropdown-footer>
                                    <div class="dropdown-footer">
                                        <div class="btns d-flex flex-row">
                                            <div class="btn btn-default">Show All</div>
                                            <div class="btn btn-default">New Conversation</div>
                                        </div>
                                    </div>
                                </template>
                            </CommonNavDropdown>
                        </div>
                    </div>
                    <div class="user" v-if="user">
                        <Avatar src="https://i.imgur.com/45vM6qK.jpg" borderRadius="100px" height="40px"
                        width="40px" :pointer=true :shrinkOnHover=true 
                        @click.native="toggleUser" />
                        <CommonUserMenu v-if="showUser" v-on-clickaway="closeUser"
                        v-on:close-user-menu="closeUser" />
                    </div>
                    <div class="login-btns d-flex flex-row" v-else>
                        <div class="btn" @click="$emit('show-login')">Log in</div>
                        <div class="btn btn-primary" @click="$emit('show-register')">Register</div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import Avatar from '@/components/common/Avatar';
export default {
    mixins: [ clickaway ],
    components: {
        Avatar
    },
    data() {
        return {
            showAlerts: false,
            showConversations: false,
            showUser: false,
        }
    },
    methods: {
        closeAlerts() {
            this.showAlerts = false;
        },
        closeConversations() {
            this.showConversations = false;
        },
        closeUser() {
            this.showUser = false;
        },
        toggleUser() {
            this.showUser = !this.showUser;
        },
        toggleAlerts() {
            this.showConversations = false;
            this.showAlerts = !this.showAlerts;
        },
        toggleConversations() {
            this.showAlerts = false;
            this.showConversations = !this.showConversations;
        },
    },
    computed: {
        /* user() {
            return this.$store.state.auth.isAuthenticated
        } */
    },
}
</script>

<style scoped>
nav {
    background-color: var(--bg-dark-color);
    margin-bottom: 30px;
}

nav, .navigation {
    min-height: 60px;
}

.navigation {
    gap: 80px;
    position: relative;
}

.nav {
    display: flex;
    width: 100%;
    gap: 80px;
}

.user {
    position: relative;
}

.user-nav {
    gap: 40px;
}

.alerts {
    gap: 15px;
}

.dropdown-container {
    position: relative;
    display: flex;
}

.nav-btn {
    height: 20px;
    width: 20px;
    background-color: var(--bg-light-10);
    padding: 20px;
    border-radius: 100px;
    position: relative;
    transition: background-color 0.25s ease-in-out;
    cursor: pointer;
}

.nav-btn:hover {
    background-color: var(--bg-light-20);
}

.nav-btn i {
    color: var(--light-text);
    font-size: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.login-btns {
    gap: 12px;
}

@media screen and (max-width: 720px) {
    /* .nav {
        position: absolute;
        inset: 120px;
    } */
    .nav {
        justify-content: flex-end;
    }

    .login-btns .btn {
        font-size: 14px;
    }
}
</style>