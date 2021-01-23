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
    document.body.classList.add('open-modal');

    state.isOpen = true;
    state.issueId = issue.id;
    state.issueDescription = issue.description;
  },
  closeModal: state => {
    document.body.classList.remove('open-modal');

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
