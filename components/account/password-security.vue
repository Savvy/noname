<template>
    <div class="password-security">
        <div class="title">Password & Security</div>
        <form ref="changePassword">
            <div class="input-group align-center">
                <span>Your existing password:</span>
                <div class="default-box">
                    <div class="password-box">
                        <input :type="hide.currentPassword ? 'password' : 'text'" v-model="credentials.currentPassword" name="password" class="input-default">
                        <span @click="hide.currentPassword = !hide.currentPassword">
                            <i class="bi" :class="getClass(hide.currentPassword)"></i>
                            {{ hide.currentPassword ? 'Show' : 'Hide' }}
                        </span>
                    </div>
                    <span>You must verify your identity before you can change your password.</span>
                </div>
            </div>
            <div class="input-group align-center">
                <span>New password:</span>
                <div class="default-box">
                    <div class="password-box">
                        <input :type="hide.password ? 'password' : 'text'" v-model="credentials.password" name="password" class="input-default">
                        <span @click="hide.password = !hide.password">
                            <i class="bi" :class="getClass(hide.password)"></i>
                            {{ hide.password ? 'Show' : 'Hide' }}
                        </span>
                    </div>
                    <password
                        v-model="credentials.password"
                        :strength-meter-only="true"
                    />
                </div>
            </div>
            <div class="input-group align-center">
                <span>Confirm new password:</span>
                <div class="default-box">
                    <div class="password-box">
                        <input :type="hide.confirmPass ? 'password' : 'text'" v-model="credentials.confirmPass" name="password" class="input-default">
                        <span @click="hide.confirmPass = !hide.confirmPass">
                            <i class="bi" :class="getClass(hide.confirmPass)"></i>
                            {{ hide.confirmPass ? 'Show' : 'Hide' }}
                        </span>
                    </div>
                </div>
            </div>
            <button class="btn btn-primary btn-submit align-self-center" @click="changePassword">Save</button>
        </form>
        <!--
            - Current Password
            - New Password
            - Repeat New Password
        -->
    </div>
</template>

<script>
import Password from 'vue-password-strength-meter'
export default {
    components: { Password },
    data() {
        return {
            hide: {
                currentPassword: true,
                password: true,
                confirmPass: true,
            },
            credentials: {
                currentPassword: null,
                password: null,
                confirmPass: null,
            }
        }
    },
    methods: {
        changePassword(event) {
            event.preventDefault();
            const credentials = this.credentials;
            if (credentials.password !== credentials.confirmPass) {
                console.log('passwords do not match');
                return;
            }
            this.$store.dispatch('auth/changePassword', credentials).then((res) => {
                if (res) {
                    this.$refs.changePassword.reset();
                }
            }).catch((error) => {
                console.log(error.response.data);
            });
        }
    },
    computed: {
        getClass() {
            return (shouldHide) => {
                return shouldHide ? 'bi-eye' : 'bi-eye-slash'
            }
        }
    }
}
</script>

<style scoped>
.title {
    font-weight: 500;
    font-size: 1.2rem;
    margin-bottom: 15px;
}

form {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.input-group {
    flex: 1 0 auto;
    max-width: initial;
    display: flex;
    flex-direction: row;
}

.input-group > span {
    min-width: 160px;
    max-width: 200px;
    width: 100%;
}

.default-box {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
    flex: 1;
}

.default-box > span {
    font-size: 14px;
    opacity: 0.6;
}

label {
    margin-right: 20px;
}

.password-box {
    width: 100%;
    display: flex;
}

.password-box > input {
    flex: 1;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.password-box > span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    gap: 3px;
    padding: 3px 8px;
    background-color: var(--bg-dark-10);
    border: 1px solid var(--bg-dark-10);
    color: var(--primary-color);
    cursor: pointer;
    user-select: none;
}

.btn-submit {
    font-size: 16px;
    min-width: 120px;
}
</style>