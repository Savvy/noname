export const state = () => ({
  data: [],
});

export const mutations = {
  SET_CATEGORIES(state, result) {
    state.data = result
  },
};

export const actions = {
  populate({ commit }) {
    this.$axios.get('/category')
    .then(res => {
      commit('SET_CATEGORIES', res.data.result);
    });
  },
};

export const getters = {
  getCategories: (state) => {
    return state.data;
  }
};