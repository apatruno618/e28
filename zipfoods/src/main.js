import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import ProductsPage from './components/pages/ProductsPage.vue';
import HomePage from './components/pages/HomePage.vue';
import CategoriesPage from './components/pages/CategoriesPage.vue';
import ProductPage from './components/pages/ProductPage.vue';
import CartPage from './components/pages/CartPage.vue';
import ProductCreatePage from './components/pages/ProductCreatePage.vue';
import './filters.js'
import Vuelidate from 'vuelidate'


/* eslint-disable no-unused-vars */
const _ = require('lodash')
/* eslint-enable no-unused-vars */

import store from './store';

Vue.use(Vuelidate)
Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  // each route is an entry point into the application
  { path: '/', component: HomePage, name: 'home' },
  { path: '/products/', component: ProductsPage, name: 'products' },
  // we're purposely putting create comes first so it takes precedence over product/:slug
  { path: '/products/create', component: ProductCreatePage, name: 'create' },
  //  :slug identifies a route segment and can use regex if needed
  { path: '/product/:slug', component: ProductPage, name: 'product', props: true },
  { path: '/categories', component: CategoriesPage, name: 'categories' },
  { path: '/cart', component: CartPage, name: 'cart' }
]

const router = new VueRouter({
  routes: routes,
  // takes advantage of browser API to dynamically change url in browser without page request
  mode: 'history',
});

new Vue({
  router: router,
  // this will inject store capabilities in all components 
  // access via this.$store
  store: store,
  render: h => h(App),
}).$mount('#app')
