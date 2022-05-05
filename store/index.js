export const actions = {
  async nuxtServerInit({ dispatch }) {
    dispatch('auth/checkUser');
  }
};