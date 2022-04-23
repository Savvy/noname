<template>
    <div id="default">
        <LayoutNavigation v-on:show-login="loginModal = !loginModal" v-on:show-register="registerModal = !registerModal" />
        <div class="container" v-if="showConfirmationAlert">
            <div id="alert" v-if="!confirmationSent">
                <div class="icon" :class="{ 'rotate': sendingConfirmation }">
                    <i class="bi bi-envelope-exclamation" v-if="!sendingConfirmation"></i>
                    <i class="bi bi-arrow-repeat" v-if="sendingConfirmation"></i>
                </div>
                <div class="text">Your email address has not been confirmed. Please click the link in the email we sent. <span @click="resendConfirmation">Click here to resend it.</span></div>
            </div>
            <div id="alert" class="success" v-else>
                <div class="icon">
                    <i class="bi bi-check-lg"></i>
                </div>
                <div class="text">A new confirmation email has been delivered.</div>
            </div>
        </div>
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
import Vue from 'vue';
import User from '@/mixins/User';
import Settings from '@/mixins/Settings';
Vue.mixin(User);
Vue.mixin(Settings);
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
    },
    computed: {
        showConfirmationAlert() {
            return this.isAuthenticated && this.user?.status != 'Active';
        }
    },
    created() {
        this.$store.dispatch('categories/populate')
    }
}
</script>

<style scoped>
#default {
    display: flex;
    flex-direction: column;
    min-height: 100%;
}

#alert {
    background-color: var(--danger-color);
    color: var(--light-text);
    border-radius: var(--border-radius);
    margin-bottom: 15px;
    padding: 15px;
    align-items: center;
    display: flex;
    gap: 20px;
}

#alert.success {
    background-color: var(--success-color);
}

#alert > .icon {
    font-size: 32px;
}

#alert > .text {
    flex: 1;
}

#alert > .text > span {
    cursor: pointer;
    font-weight: 500;
    text-decoration: underline;
}
</style>