export default {
  data() {
    return {
      sendingConfirmation: false,
      confirmationSent: false,
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
    isAuthenticated() {
      return this.$store.state.auth.user;
    },
    userAvatar() { return (details) => {
        return details.avatarType === 'Custom' ? (this.$config.API_URL + details.avatar) : details.avatar;
      }
    }
  },
  methods: {
    async resendConfirmation() {
      this.sendingConfirmation = true;
        this.$store.dispatch('auth/resendConfirmation').then(() => {
          this.sendingConfirmation = false;
          this.confirmationSent = true;
        });
    },
    async logout() {
      try {
          await this.$store.dispatch('auth/logout');
          this.$router.push('/login');
      } catch(error) {
          console.log(error);
      }
    },
  }
}