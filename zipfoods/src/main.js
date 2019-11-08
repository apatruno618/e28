import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import ShowProducts from './components/ShowProducts.vue';
import ShowHome from './components/ShowHome.vue';
import ShowCategories from './components/ShowCategories.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  // each route is an entry point into the application
  { path: '/', component: ShowHome, name: 'home' },
  { path: '/products', component: ShowProducts, name: 'products' },
  { path: '/categories', component: ShowCategories, name: 'categories' }
]

const router = new VueRouter({
  routes: routes,
  // takes advantage of browser API to dynamically change url in browser without page request
  mode: 'history',
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
