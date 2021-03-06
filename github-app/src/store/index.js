import { createStore } from 'vuex';
import firebase from 'firebase/app';
import router from '../router/index';

export default createStore({
  state: {
    isAuthenticated: false,
    user: null,
  },
  mutations: {
    setAuth(state, payload) {
      // console.log('STORE setAuth', payload);
      state.isAuthenticated = payload;
    },
    setUser(state, payload) {
      // console.log('STORE setUser', payload);
      state.user = payload;
    },
  },
  actions: {
    checkAuth(context) {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // console.log('STORE ACTION', user);
          context.commit('setAuth', true);
          context.commit('setUser', user);
        } else {
          context.commit('setAuth', false);
          context.commit('setUser', null);
        }
      });
    },

    logout() {
      firebase.auth().signOut();
      router.replace('/signin');
    },
  },
  getters: {
    email: (state) => {
      if (state.user.email) {
        return state.user.email;
      } else {
        return null;
      }
    },

    isAuthenticated: (state) => state.isAuthenticated,
  },
  // modules: {},
});
