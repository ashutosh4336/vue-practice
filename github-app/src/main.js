import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import firebase from 'firebase';
import 'firebase/auth';
import firebaseConfig from './config/config';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App);

firebase.initializeApp(firebaseConfig);

store.dispatch('checkAuth');

app.use(VueSweetalert2);
app.use(store);
app.use(router);

app.mount('#app');
