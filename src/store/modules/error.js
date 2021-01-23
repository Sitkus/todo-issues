const state = {
  errorMessage: ''
};

const getters = {
  errorMessage: state => state.errorMessage
};

const actions = {
  showError({ commit }) {
    commit('showErrorMessage');
  },
  removeError({ commit }) {
    commit('removeErrorMessage');
  }
};

const mutations = {
  showErrorMessage: state => (state.errorMessage = 'Please fill in the message box.'),
  removeErrorMessage: state => (state.errorMessage = '')
};

export default {
  state,
  getters,
  actions,
  mutations
};
