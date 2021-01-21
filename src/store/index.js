import Vue from 'vue';
import Vuex from 'vuex';
import issues from './modules/issues';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    issues
  }
});

export default store;
