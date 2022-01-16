<template>
    <div id="default">
        <LayoutNavigation v-on:show-login="loginModal = !loginModal" v-on:show-register="registerModal = !registerModal" />
        <Nuxt />
        <LayoutFooter />
        <transition name="fade">
            <div class="modal-overlay" v-if="loginModal || registerModal" @click="closeModals"></div>
        </transition>
        <transition name="slide-fade">
            <LayoutLoginModal v-show="loginModal" v-on:close-modal-login="loginModal = !loginModal"/>
        </transition>
        <transition name="slide-fade">
            <LayoutRegisterModal v-show="registerModal" v-on:close-modal-register="registerModal = !registerModal"/>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginModal: false,
            registerModal: false,
        }
    },
    methods: {
        closeModals() {
            this.loginModal = false;
            this.registerModal = false;
        }
    }
}
</script>

<style scoped>
#default {
    display: flex;
    flex-direction: column;
    height: 100%;
}
</style>