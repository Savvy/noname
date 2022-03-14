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
  }
}