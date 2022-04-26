<template>
    <nav>
        <div class="navigation container d-flex justify-between align-center">
            <IconBars class="menu-trigger" @click.native="toggleNav" />
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
                                            <nuxt-link to="/conversations/new" class="btn btn-default">New Conversation</nuxt-link>
                                        </div>
                                    </div>
                                </template>
                            </CommonNavDropdown>
                        </div>
                    </div>
                    <div class="user" v-if="user">
                        <CommonAvatar :src="user.details.avatar" borderRadius="100px" height="40px"
                        width="40px" :pointer=true :shrinkOnHover=true 
                        @click.native="toggleUser" />
                        <CommonUserMenu v-if="showUser" v-on-clickaway="closeUser"
                        v-on:close-user-menu="closeUser" />
                    </div>
                    <div class="login-btns d-flex flex-row" v-else>
                        <nuxt-link to="/login" class="btn">Log in</nuxt-link>
                        <nuxt-link to="/register" class="btn btn-primary">Register</nuxt-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav-container" :class="{ 'open': showNavigation }">
            <div class="nav-backdrop" @click="toggleNav"></div>
            <div class="bottom-nav container d-flex align-center justify-center">
                <div class="menu-header">
                    <div class="title">Navigation</div>
                    <IconClose class="menu-close" @click.native="toggleNav" />
                </div>
                <ul>
                    <li>
                        <nuxt-link to="/" v-tooltip="'Home'"><i class="bi bi-list-ul"></i><span>Home</span></nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/posts" v-tooltip="'Recent Posts'"><i class="bi bi-clock"></i><span>Recent Posts</span></nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/members" v-tooltip="'Members'"><i class="bi bi-people-fill"></i><span>Members</span><!-- <i class="bi bi-caret-down-fill"></i> --></nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
export default {
    mixins: [ clickaway ],
    data() {
        return {
            showAlerts: false,
            showConversations: false,
            showUser: false,
            showNavigation: false,
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
        toggleNav() {
            this.showNavigation = !this.showNavigation;
        }
    },
    computed: {
        /* user() {
            return this.$store.state.auth.isAuthenticated
        } */
    },
}
</script>

<style scoped>

.menu-trigger {
    display: none;
}

nav {
    background-color: var(--bg-dark-color);
    display: flex;
    flex-direction: column;
    width: 100%;
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

.bottom-nav {
    background-color: var(--bg-dark-color);
    padding: 8px 20px;
    position: relative;
}

ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: 1;
}

ul > li > a {
    padding: 12px;
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 4px;
    line-height: 20px;
}

/* ul > li > a > span {
    display: none;
} */

ul > li > a > i {
    font-size: 1.25em;
    line-height: 1;
    position: relative;
}

ul > li > a > i:not(.bi-caret-down-fill)::before {
    position: relative;
    z-index: 1;
    opacity: 0.65;
    transition: opacity 0.25s ease-in-out;
}

ul > li:hover > a > i:not(.bi-caret-down-fill)::before {
    opacity: 1;
}

ul > li:hover > a > i:not(.bi-caret-down-fill)::after {
    transform: translate(-50%, -50%) scale(1);
}

ul > li > a > i:not(.bi-caret-down-fill)::after {
    content: '';
    height: 40px;
    width: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: var(--bg-color);
    border-radius: 100px;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.25s ease-in-out;
}

ul > li > a > i.bi-caret-down-fill {
    margin-left: 5px;
    font-size: 13px;
}

ul > li > a > span {
    margin-left: 6px;
    transition: margin 0.25s ease-in-out;
}

ul > li:hover > a > span {
    margin-left: 12px;
}

.menu-header {
    display: none;
}

.nav-backdrop {
    display: none;
}

@media screen and (max-width: 720px) {

    .nav-backdrop {
        display: block;
    }

    .bottom-nav {
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        height: 100%;
        max-width: 85%;
        width: 260px;
        left: 0;
        margin: 0;
        z-index: 10;
        box-shadow: 2px 0 5px 0 rgb(0 0 0 / 25%);
        display: none;
    }

    .bottom-nav ul {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }

    .nav-container.open {
        position: fixed;
        overflow: hidden;
        height: 100vh;
        width: 100vw;
        z-index: 50;
    }

    .nav-container.open .bottom-nav {
        display: flex;
    }

    button {
        position: relative;
        z-index: 5;
    }

    ul > li > a {
        padding: 12px 0;
    }

    ul > li > a > span {
        display: initial;
        margin-left: 12px;
    }
    
    .nav {
        justify-content: flex-end;
    }

    .login-btns .btn {
        font-size: 12px;
        padding: 10px 12px;
    }

    .navigation {
        gap: 20px;
    }

    .menu-header {
        color: var(--light-text);
        padding: 15px 0;
        font-weight: bold;
        font-size: 18px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .menu-trigger, .menu-close {
        display: block;
        color: var(--light-text);
        width: auto;
        height: 50px;
        cursor: pointer;
    }

    .menu-close {
        height: 30px;
    }
}
</style>