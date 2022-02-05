export const state = () => ({
  user: null,
  flash_message: '',
});

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  SET_MESSAGE(state, message) {
    state.flash_message = message;
  },
  CLEAR_MESSAGE(state) {
    state.flash_message = '';
  }
};

export const actions = {
  setUser({ commit }, user) {
    return new Promise((res, reject) => {
      try {
        commit('SET_USER', user);
        res(user);
      } catch (error) {
        reject(error);
      }
    });
  },
  login({ commit }, { email, password }) {
    let data = { email, password };

    if (!email || !password) {
      commit('SET_MESSAGE', 'missing_credentials');
      return false;
    }

    return this.$axios.post('/auth/login', data)
    .then((res) => {
        return res.data;
    }).then(({success, message, user}) => {
      if (success) {
        commit('SET_USER', user);
        return true;
      }
      commit('SET_MESSAGE', message);
      return false;
    }).catch((error) => {
      commit('SET_MESSAGE', error.response.data.error);
    });
  },
  logout({ commit }) {
    return this.$axios.get('/auth/logout')
    .then(() => {
      commit('SET_USER', null);
    });
  },
};

export const getters = {
};