export const state = () => ({
  user: null,
  error_message: '',
  success_message: '',
});

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  SET_ERROR(state, message) {
    state.error_message = message;
  },
  CLEAR_ERROR(state) {
    state.error_message = '';
  },
  SET_SUCCESS(state, message) {
    state.success_message = message;
  },
  CLEAR_SUCCESS(state) {
    state.error_message = '';
  },
  ADD_BOOKMARK(state, bookmark) {
    state.user.bookmarks.push(bookmark);
  },
  REMOVE_BOOKMARK(state, bookmark) {
    state.user.bookmarks = state.user.bookmarks.filter((el) => el.post !== bookmark.post);
  },
  UPDATE_AVATAR(state, payload) {
    const details = state.user.details;
    details.avatar = details.avatarType === 'Custom' ? `${payload.avatar}?t=${new Date().getTime()}` : payload.avatar;
  }
};

export const actions = {
  setError({ commit }, error) {
    commit('SET_MESSAGE', error);
  },
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
  async checkUser({ commit, state }) {
    if (state.user) return;
    try {
      const { data } = await this.$axios.get("/user", { withCredentials: true });
      if (data.success) {
        commit('SET_USER', data.user);
      }
    } catch(_) {}
  },
  login({ commit }, { email, password }) {
    let data = { email, password };

    if (!email || !password) {
      commit('SET_ERROR', 'missing_credentials');
      return false;
    }

    return this.$axios.post('/auth/login', data)
    .then((res) => {
        return res.data;
    }).then(({success, message, user}) => {
      if (success) {
        commit('SET_USER', user);
        commit('SET_SUCCESS', message);
        setTimeout(() => {
          this.$router.push('/');
          commit('CLEAR_SUCCESS');
          commit('CLEAR_ERROR');
        }, 1000);
        return true;
      }
      commit('SET_ERROR', message);
      return false;
    }).catch((error) => {
      commit('SET_ERROR', error.response.data.error);
    });
  },
  register({ commit}, credentials) {
    if (!credentials.username || !credentials.email || !credentials.password || !credentials.confirmPass) {
      commit('SET_ERROR', 'missing_credentials');
      return false;
    }
    if (credentials.password != credentials.confirmPass) {
      commit('SET_ERROR', 'mismatch_passwords');
      return false;
    }
    delete credentials.confirmPass;
    return this.$axios.post('/auth/register', credentials).then((res) => {
      return res.data;
    }).then(({success, message}) => {
      if (success) {
        commit('SET_SUCCESS', message);
        return true;
      }
    }).catch((error) => {
      commit('SET_ERROR', error.response.data.message);
    });
  },
  resendConfirmation({ commit }) {
    return this.$axios.get('/auth/confirm/resend');
  },

  confirmUser({ commit }, { token }) {
    return this.$axios.get(`/auth/confirm/${token}`);
  },
  logout({ commit }) {
    return this.$axios.get('/auth/logout')
    .then(() => {
      commit('SET_USER', null);
    });
  },
  updateAvatar({ commit }, payload) {
    commit('UPDATE_AVATAR', payload);
  },
  changePassword({ commit }, payload) {
    return this.$axios.post(`/user/changePassword`, payload);
  },
  changeUsername({ commit }, payload) {
    return this.$axios.post(`/user/update/username`, payload);
  },
  changeEmail({ commit }, payload) {
    return this.$axios.post(`/user/update/email`, payload);
  },
  requestReset({ commit }, payload) {
    return this.$axios.post(`/user/requestReset`, payload);
  },
  addBookmark({ commit }, payload) {
    commit('ADD_BOOKMARK', payload);
  },
  removeBookmark({ commit }, payload) {
    commit('REMOVE_BOOKMARK', payload);
  },
};

export const getters = {
};