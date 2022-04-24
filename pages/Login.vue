<template>
    <div id="login">
        <div class="container">
            <div class="content">
                <h1 class="title">Login</h1>
                <div class="alert-message error" v-if="$store.state.auth.error_message">{{ $store.state.auth.error_message }}</div>
                <div class="alert-message success" v-else-if="$store.state.auth.success_message">{{ $store.state.auth.success_message }}</div>
                <form ref="loginForm" class="login-form d-flex flex-column align-center" @submit.prevent="login">
                    <div class="input-group d-flex flex-column justify-center align-center w-100">
                        <input type="email" v-model="credentials.email" name="Email Address" placeholder="Email Address" class="input-default">
                        <input type="password" v-model="credentials.password" name="Password" placeholder="Password" class="input-default">
                        <nuxt-link to="/forgot-password" class="forgot-pass">Forgot Password?</nuxt-link>
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
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Login'
        }
    },
    middleware: 'guestOnly',
    data() {
        return {
            credentials: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        redirectSocial(destination) {
            location = `${this.$config.API_URL}auth/${destination}`;
        },
        login() {
            if (this.credentials.password.length < this.settings.minPasswordLength) {
                // TODO: Alert user of minimum password length
                return;
            }
            if (this.credentials.password.length > this.settings.maxPasswordLength) {
                // TODO: Alert user of maximum password length
                return;
            }
            this.$store.dispatch('auth/login', this.credentials).then((res) => {
                if (res) {
                    this.$refs.loginForm.reset();
                    this.$emit('close-modal-login');
                }
            });
        }
    }
}
</script>

<style scoped>

#login {
    flex: 1;
    margin-top: 60px;
}

.content {
    max-width: 750px;
    margin: 0 auto;
}

.title {
    text-align: center;
    margin-bottom: 15px;
}

form {
    padding-top: 15px;
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
}

.or {
    width: 100%;
    height: 1px;
    background-color: var(--bg-light-20);
    text-align: center;
    margin: 40px 0;
    position: relative;
    font-weight: bold;
    color: var(--light-text);
}

.or span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--bg-color);
    z-index: 1;
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