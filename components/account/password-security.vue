<template>
    <div class="password-security">
        <div class="title">Password & Security</div>
        <form ref="changePassword">
            <div class="alert-message error" v-if="message.error">{{ message.error }}</div>
            <div class="alert-message success" v-if="message.success">{{ message.success }}</div>
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
                        <div class="password-group">
                            <input :type="hide.password ? 'password' : 'text'" v-model="credentials.password" name="password" class="input-default">
                            <password
                                v-model="credentials.password"
                                strengthMeterClass="strength-meter"
                                strengthMeterFillClass="strength-meter-fill"
                                @score="updateScore"
                                :strength-meter-only="true"
                            />
                        </div>
                        <span @click="hide.password = !hide.password">
                            <i class="bi" :class="getClass(hide.password)"></i>
                            {{ hide.password ? 'Show' : 'Hide' }}
                        </span>
                    </div>
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
            score: 0,
            message: {
                error: '',
                success: '',
            },
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

            if (!this.passwordCheck()) {
                return;
            }

            this.$store.dispatch('auth/changePassword', this.credentials).then((res) => {
                if (res) {
                    this.$refs.changePassword.reset();
                }
            }).catch((error) => {
                this.message.error = error.response.data.message;
            });
        },
        passwordCheck() {
            let returnVal = true;
            if (!this.credentials.currentPassword || !this.credentials.password || !this.credentials.confirmPass) {
                this.message.error = 'password_fields_empty';
                returnVal = false;
            } else if (this.credentials.password !== this.credentials.confirmPass) {
                this.message.error = 'passwords_must_match';
                returnVal = false;
            } else if (this.credentials.password.length < this.settings.minPasswordLength) {
                // TODO: Alert user of minimum password length
                this.message.error = 'password_too_short';
                returnVal = false;
            } else if (this.credentials.password.length > this.settings.maxPasswordLength) {
                // TODO: Alert user of maximum password length
                this.message.error = 'password_too_long';
                returnVal = false;
            }
            if (!returnVal) {
                setTimeout(() => {
                    this.message.error = '';
                }, 3000);
            }
            return returnVal;
        },
        updateScore(score) {
            this.score = score;
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
    gap: 5px;
}

.password-box > input {
    flex: 1;
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
    border-radius: var(--border-radius);
}

.btn-submit {
    font-size: 16px;
    min-width: 120px;
}
</style>