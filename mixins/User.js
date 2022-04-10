export default {
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
    isAuthenticated() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
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