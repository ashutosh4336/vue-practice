import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/index';

import Home from '../views/Home.vue';
import SignIn from '../views/Signin.vue';
import SignUp from '../views/Signup.vue';
import PageNotFound from '../views/PageNotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      auth: true, // A Protected Route
    },
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/:catchAll(.*)',
    component: PageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isAuthenticated) {
    next('/signin');
  } else {
    next();
  }
});

export default router;
