<template>
    <CommonModal>
        <template v-slot:modal-title>Log in</template>
        <template v-slot:modal-body>
            <form ref="loginForm" @submit="login">
                <div class="input-group">
                    <input type="email" v-model="user.email" name="Email Address" placeholder="Email Address">
                    <input type="password" v-model="user.password" name="Password" placeholder="Password">
                </div>
                <nuxt-link to="/forgot-password">Forgot Password?</nuxt-link>
                <div class="btn btn-primary">Log in</div>
            </form>
            <div class="or"><span>OR</span></div>
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
.or {
    width: 100%;
    height: 1px;
    background-color: var(--light-bg-10);
}
</style>