<template>
    <CommonModal name="register" v-on:close-modal-register="$emit('close-modal-register')">
        <template v-slot:modal-title>Register</template>
        <template v-slot:modal-body>
            <div class="alert-message error" v-if="$store.state.auth.error_message">{{ $store.state.auth.error_message }}</div>
            <div class="alert-message success" v-else-if="$store.state.auth.success_message">{{ $store.state.auth.success_message }}</div>
            <form ref="registerForm" class="register-form d-flex flex-column align-center" @submit="register">
                <div class="input-group d-flex flex-column justify-center align-center w-100">
                    <input type="text" v-model="credentials.username" name="username" placeholder="Username" class="input-default">
                    <input type="email" v-model="credentials.email" name="email_address" placeholder="Email Address" class="input-default">
                    <input type="password" v-model="credentials.password" name="password" placeholder="Password" class="input-default">
                    <input type="password" v-model="credentials.confirmPass" name="confirm_password" placeholder="Confirm Password" class="input-default">
                    <nuxt-link to="/login" class="forgot-pass">Already have an account?</nuxt-link>
                </div>
                <button type="submit" class="btn btn-primary">Create Account</button>
            </form>
            <div class="or"><span>OR</span></div>
            <div class="social-register">
                <div class="social-header">Register an account with:</div>
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
            credentials: {
                username: null,
                email: null,
                password: null,
                confirmPass: null
            },
        }
    },
    methods: {
        register() {
            this.$refs.registerForm.reset();
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

.register-form button {
    align-self: center;
    min-width: 45%;
    min-height: 45px;
    font-weight: 500;
    font-size: inherit;
    font-family: var(--primary-font);
}

.social-register .btns {
    gap: 15px;
    margin-bottom: 15px;
}
</style>