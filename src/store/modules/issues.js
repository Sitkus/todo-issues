import { uuid } from 'vue-uuid';

const state = {
  issues: [
    {
      id: uuid.v4(),
      done: false,
      trash: false,
      description: 'I had this issue with your system...'
    },
    {
      id: uuid.v4(),
      done: false,
      trash: false,
      description:
        'Okay so, the issue is that I got stuck using Safari. Okay so, the issue is that I got stuck using Safari. Okay so, the issue is that I got stuck using Safari.'
    },
    {
      id: uuid.v4(),
      done: true,
      trash: false,
      description: 'For whatever reason my computer got stuck!'
    },
    {
      id: uuid.v4(),
      done: false,
      trash: true,
      description: 'Could I get my computer fixed please?'
    }
  ]
};

const getters = {
  openIssues: state => state.issues.filter(issue => !issue.done && !issue.trash),
  doneIssues: state => state.issues.filter(issue => issue.done && !issue.trash),
  trashedIssues: state => state.issues.filter(issue => issue.trash)
};

const actions = {
  getIssues({ commit }) {
    const localStorageIssues = JSON.parse(localStorage.getItem('issues'));

    if (localStorageIssues) {
      commit('setIssues', localStorageIssues);
    }
  },
  newIssue({ commit }, description) {
    const issue = {
      id: uuid.v4(),
      done: false,
      trash: false,
      description
    };

    commit('addIssue', issue);
  },
  doneIssue({ commit }, id) {
    commit('markIssueDone', id);
  },
  updateIssue({ commit }, modalData) {
    commit('updateIssue', modalData);
  },
  trashIssue({ commit }, id) {
    commit('trashIssue', id);
  }
};

const mutations = {
  setIssues: (state, issues) => (state.issues = issues),
  addIssue: (state, issue) => {
    state.issues.unshift(issue);

    localStorage.setItem('issues', JSON.stringify(state.issues));
  },
  markIssueDone: (state, id) => {
    state.issues = state.issues.map(issue => {
      if (issue.id === id) {
        issue.done = !issue.done;
      }

      return issue;
    });

    localStorage.setItem('issues', JSON.stringify(state.issues));
  },
  updateIssue: (state, modalData) => {
    state.issues = state.issues.map(issue => {
      if (issue.id === modalData.issueId) {
        issue.description = modalData.issueDescription;
      }

      return issue;
    });

    localStorage.setItem('issues', JSON.stringify(state.issues));
  },
  trashIssue: (state, id) => {
    state.issues = state.issues.map(issue => {
      if (issue.id === id) {
        issue.trash = !issue.trash;
      }

      return issue;
    });

    localStorage.setItem('issues', JSON.stringify(state.issues));
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
