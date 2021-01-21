import Vue from 'vue';
import Vuex from 'vuex';
import uuid from 'vue-uuid';
import issues from './modules/issues';

Vue.use(Vuex);
Vue.use(uuid);

const store = new Vuex.Store({
  modules: {
    issues
  }
});

export default store;
