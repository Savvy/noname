<template>
    <nav class="w-100">
        <div class="navigation container d-flex justify-between align-center">
            <nuxt-link to="/" class="brand">NoName</nuxt-link>
            <CommonSearch />
            <div class="user-nav d-flex flex-row align-center">
                <div class="alerts d-flex flex-row" v-if="user">
                    <div class="nav-btn dropdown" @click="toggleAlerts">
                        <i class="bi bi-bell"></i>
                        <CommonNavDropdown v-if="showAlerts">
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
                    <div class="nav-btn dropdown" @click="toggleConversations">
                        <i class="bi bi-envelope"></i>
                        <CommonNavDropdown v-if="showConversations" @click.prevent>
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
                    @click.native="logout" />
                </div>
                <div class="login-btns d-flex flex-row" v-else>
                    <div class="btn" @click="$emit('show-login')">Log in</div>
                    <div class="btn btn-primary" @click="$emit('show-register')">Register</div>
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
        }
    },
    methods: {
        toggleAlerts() {
            this.showConversations = false;
            this.showAlerts = !this.showAlerts;
        },
        toggleConversations() {
            console.log('test')
            this.showAlerts = false;
            this.showConversations = !this.showConversations;
        },
        async logout() {
            try {
                await this.$store.dispatch('auth/logout');
                this.$router.push('/login');
            } catch(error) {
                console.log(error);
            }
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
}

.user-nav {
    gap: 40px;
}

.alerts {
    gap: 15px;
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
</style>