export const state = () => ({
  data: {},
});

export const mutations = {
  SET_DATA(state, { name, data }) {
    state.data[name] = {...data};
  },
};

export const actions = {
  setData({ commit }, payload) {
    commit('SET_DATA', payload);
  },
};

export const getters = {
  getData: (state) => (name) => {
    return state.data[name];
  }
};