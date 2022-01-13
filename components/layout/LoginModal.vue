<template>
    <CommonModal name="login" v-on:close-modal-login="$emit('close-modal-login')">
        <template v-slot:modal-title>Log in</template>
        <template v-slot:modal-body>
            <form ref="loginForm" class="login-form d-flex flex-column align-center" @submit="login">
                <div class="input-group d-flex flex-column justify-center align-center w-100">
                    <input type="email" v-model="user.email" name="Email Address" placeholder="Email Address" class="input-default">
                    <input type="password" v-model="user.password" name="Password" placeholder="Password" class="input-default">
                    <nuxt-link to="/forgot-password" class="forgot-pass">Forgot Password?</nuxt-link>
                </div>
                <button type="submit" class="btn btn-primary">Log in</button>
            </form>
            <div class="or"><span>OR</span></div>
            <div class="social-login">
                <div class="social-header">Log in with:</div>
                <div class="btns d-flex flex-row justify-center w-100">
                    <div class="btn facebook"><i class="bi bi-facebook"></i> Facebook</div>
                    <div class="btn twitter"><i class="bi bi-twitter"></i> Twitter</div>
                    <div class="btn discord"><i class="bi bi-discord"></i> Discord</div>
                </div>
            </div>
        </template>
    </CommonModal>
</template>

<script>
export default {
    data() {
        return {
            user: {
                email: null,
                password: null
            }
        }
    },
    methods: {
        login() {
            this.$refs.loginForm.reset();
        }
    }
}
</script>

<style>

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