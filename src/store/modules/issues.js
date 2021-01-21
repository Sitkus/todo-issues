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
      description: 'Okay so, the issue is that I got stuck using Safari.'
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
  allIssues: (state) => state.issues,
  openIssues: (state) => state.issues.filter((issue) => !issue.done && !issue.trash),
  doneIssues: (state) => state.issues.filter((issue) => issue.done && !issue.trash),
  trashedIssues: (state) => state.issues.filter((issue) => issue.trash)
};

const actions = {
  // Add
};

const mutations = {
  // Add
};

export default {
  state,
  getters,
  actions,
  mutations
};
