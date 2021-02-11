import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Welcome | TO-DO'
    }
  },
  {
    path: '/issues/open',
    name: 'Open Issues',
    component: () => import('../views/issues/Open.vue'),
    meta: {
      title: 'Open Issues | TO-DO'
    }
  },
  {
    path: '/issues/done',
    name: 'Done Issues',
    component: () => import('../views/issues/Done.vue'),
    meta: {
      title: 'Done Issues | TO-DO'
    }
  },
  {
    path: '/issues/trashed',
    name: 'Trashed Issues',
    component: () => import('../views/issues/Trashed.vue'),
    meta: {
      title: 'Trashes Issues | TO-DO'
    }
  },
  {
    path: '*',
    name: 'Page Not Found',
    component: Home,
    meta: {
      title: 'Page Not Found | TO-DO'
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;

  next();
});

export default router;
