export const actions = {
  async nuxtServerInit({ dispatch }) {
      await dispatch('settings/fetchData');
  }
};