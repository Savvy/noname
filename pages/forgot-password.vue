<template>
    <div id="login">
        <div class="container">
            <div class="content">
                <h1 class="title">Forgot Your Password?</h1>
                <div class="alert-message" v-if="request.success">{{ request.message }}</div>
                <form ref="resetForm" class="login-form d-flex flex-column align-center" @submit.prevent="reset">
                    <div class="input-group d-flex flex-column justify-center align-center w-100">
                        <input type="email" v-model="credentials.email" name="Email Address" placeholder="Email Address" class="input-default">
                    </div>
                    <button type="submit" class="btn btn-primary">Send Email</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: 'Forgot Password'
        }
    },
    middleware: 'guestOnly',
    data() {
        return {
            request: {},
            credentials: {
                email: null
            }
        }
    },
    methods: {
        reset() {
            this.$store.dispatch('auth/requestReset', this.credentials).then(({ data }) => {
                if (data.success) {
                    this.request = data;
                    this.$refs.resetForm.reset();
                }
            }).catch((error) => {

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
    gap: 20px;
}

.alert-message {
    text-align: center;
    color: var(--success-color);
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