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
.box {
    height: 100px;
    width: 100px;
    background-color: aqua;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease-in-out; 
}
.fade-enter, .fade-leave-active {
    opacity: 0; 
}

.slide-fade-enter-active {
    transition: all .3s ease;
}
.slide-fade-leave-active {
    transition: all .58s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
    opacity: 0;
}

#default {
    display: flex;
    flex-direction: column;
    height: 100%;
}
</style>