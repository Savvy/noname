export default {
  computed: {
    settings() {
      return this.$store.state.settings.data;
    },
  },
  methods: {
    redirectSocial(destination) {
      location = `${this.$config.API_URL}auth/${destination}`;
    },
  }
}