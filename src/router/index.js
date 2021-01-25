import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/issues/open',
    name: 'Open Issues',
    component: () => import('../views/issues/Open.vue')
  },
  {
    path: '/issues/done',
    name: 'Done Issues',
    component: () => import('../views/issues/Done.vue')
  },
  {
    path: '/issues/trashed',
    name: 'Trashed Issues',
    component: () => import('../views/issues/Trashed.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
