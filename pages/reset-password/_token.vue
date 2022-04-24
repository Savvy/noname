<template>
  <div id="login">
    <div class="container">
      <div class="content">
        <h1 class="title">Forgot Your Password?</h1>
        <div class="alert-message">Password</div>
        <form ref="resetForm" class="login-form d-flex flex-column align-center" @submit.prevent="reset">
          <div class="input-group d-flex flex-column justify-center align-center w-100">
            <input type="password" v-model="credentials.password" name="password" placeholder="New Password" class="input-default">
            <input type="password" v-model="credentials.confirmPassword" name="confirm-password" placeholder="Confirm New Password" class="input-default">
          </div>
          <button type="submit" class="btn btn-primary">Reset Password</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        password: '',
        confirmPassword: '',
      }
    }
  },
  methods: {
    reset() {

    }
  }
}
</script>

<style scoped>

</style>