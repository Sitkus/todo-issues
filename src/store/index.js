import Vue from 'vue';
import Vuex from 'vuex';
import uuid from 'vue-uuid';
import { issues, modal, error } from './modules';

Vue.use(Vuex);
Vue.use(uuid);

const store = new Vuex.Store({
  modules: {
    issues,
    modal,
    error
  }
});

export default store;
