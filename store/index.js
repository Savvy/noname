export const actions = {
  async nuxtServerInit({ dispatch }) {
    dispatch('settings/fetchData');
  }
};