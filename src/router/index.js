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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/issues/Open.vue')
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
