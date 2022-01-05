<template>
    <nav class="w-100">
        <div class="navigation container d-flex justify-between align-center">
            <nuxt-link to="/" class="brand">NoName</nuxt-link>
            <div class="input-group w-auto">
                <i class="bi bi-search"></i>
                <input type="search" class="w-100 h-100">
            </div>
            <div class="user-nav d-flex flex-row align-center">
                <div class="alerts d-flex flex-row">
                    <div class="nav-btn"><i class="bi bi-bell"></i></div>
                    <div class="nav-btn"><i class="bi bi-envelope"></i></div>
                </div>
                <div class="user">
                    <Avatar src="https://i.imgur.com/45vM6qK.jpg" borderRadius="100px" height="40px" width="40px" :pointer=true :shrinkOnHover=true />
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
import Avatar from '@/components/common/Avatar';
export default {
    components: {
        Avatar
    }
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

.input-group input {
    min-height: 35px;
    height: 100%;
    border-radius: 100px;
}
</style>