export const state = () => ({
  data: [],
});

export const mutations = {
  SET_SETTINGS(state, result) {
    state.data = result
  },
};

export const actions = {
  fetchData({ commit }) {
    return this.$axios.get('/settings')
    .then(({ data }) => {
      commit('SET_SETTINGS', data.result);
    });
  },
};

export const getters = {
  getSettings: (state) => {
    return state.data;
  }
};