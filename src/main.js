import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import '../node_modules/frow/dist/frow.min.css'

import App from './App.vue'

import { routes } from './router.js'
import { store } from './store/store.js';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vue-intro-firebase.firebaseio.com/';


Vue.config.productionTip = false

const router = new VueRouter({
  routes,
  mode: 'history'
})

export const stockBus = new Vue();

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')
