const state = {
  isOpen: false,
  issueId: '',
  issueDescription: ''
};

const getters = {
  modal: state => state
};

const actions = {
  openModal({ commit }, issue) {
    commit('openModal', issue);
  },
  closeModal({ commit }) {
    commit('closeModal');
  }
};

const mutations = {
  openModal: (state, issue) => {
    state.isOpen = true;
    state.issueId = issue.id;
    state.issueDescription = issue.description;
  },
  closeModal: state => {
    state.isOpen = false;
    state.issueId = '';
    state.issueDescription = '';
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
