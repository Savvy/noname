<template>
    <CommonModal name="login" v-on:close-modal-login="$emit('close-modal-login')">
        <template v-slot:modal-title>Log in</template>
        <template v-slot:modal-body>
            <div class="alert-message error" v-if="$store.state.auth.error_message">{{ $store.state.auth.error_message }}</div>
            <div class="alert-message success" v-else-if="$store.state.auth.success_message">{{ $store.state.auth.success_message }}</div>
            <form ref="loginForm" class="login-form d-flex flex-column align-center" @submit.prevent="login">
                <div class="input-group d-flex flex-column justify-center align-center w-100">
                    <input type="email" v-model="credentials.email" name="Email Address" placeholder="Email Address" class="input-default">
                    <input type="password" v-model="credentials.password" name="Password" placeholder="Password" class="input-default">
                    <div class="forgot-pass" @click="closeModal">Forgot Password?</div>
                </div>
                <button type="submit" class="btn btn-primary">Log in</button>
            </form>
            <div class="or"><span>OR</span></div>
            <div class="social-login">
                <div class="social-header">Log in with:</div>
                <div class="btns d-flex flex-row justify-center w-100">
                    <!-- <div class="btn facebook" v-if="settings.socialAuth.facebook" @click="redirectSocial('facebook')"><i class="bi bi-facebook"></i> Facebook</div> -->
                    <div class="btn twitter" v-if="settings.socialAuth.twitter" @click="redirectSocial('twitter')"><i class="bi bi-twitter"></i> Twitter</div>
                    <div class="btn discord" v-if="settings.socialAuth.discord" @click="redirectSocial('discord')"><i class="bi bi-discord"></i> Discord</div>
                </div>
            </div>
        </template>
    </CommonModal>
</template>

<script>
export default {
    data() {
        return {
            credentials: {
                email: null,
                password: null
            }
        }
    },
    methods: {
        redirectSocial(destination) {
            location = `${this.$config.API_URL}auth/${destination}`;
        },
        closeModal() {
            this.$emit('close-modal-login');
            this.$router.push('/forgot-password')
        },
        login() {
            const credentials = this.credentials;
            this.$store.dispatch('auth/login', credentials).then((res) => {
                if (res) {
                    this.$refs.loginForm.reset();
                    this.$emit('close-modal-login');
                    /* this.$router.push('/'); */
                }
            });
        }
    }
}
</script>

<style>

form {
    padding-top: 15px;
}

.alert-message {
    text-align: center;
    color: var(--danger-color);
    margin: 5px 0;
}
.input-group {
    gap: 20px;
    max-width: 80%;
}

.forgot-pass {
    align-self: flex-end;
    margin: -8px 0 25px 0;
    font-size: 14px;
    color: var(--primary-color);
    cursor: pointer;
}

.forgot-pass:hover {
    text-decoration: underline;
}

.or {
    width: 100%;
    height: 1px;
    background-color: var(--bg-light-20);
    text-align: center;
    margin: 40px 0;
    position: relative;
    font-weight: bold;
}

.or span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--bg-color);
    z-index: 50;
    padding: 5px 50px;
}

.or::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    height: 1px;
    background-color: var(--bg-light-20);
}

.social-header {
    text-align: center;
    color: var(--primary-color);
    margin-bottom: 20px;
}

.login-form button {
    align-self: center;
    min-width: 45%;
    min-height: 45px;
    font-weight: 500;
    font-size: inherit;
    font-family: var(--primary-font);
}

.social-login .btns {
    gap: 15px;
    margin-bottom: 15px;
}
</style>