import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ShowHome from './components/ShowHome.vue';
import ShowCategories from './components/ShowCategories.vue';
import ShowRecipes from './components/ShowRecipes.vue';

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/', component: ShowHome },
  { path: '/recipes', component: ShowRecipes },
  { path: '/categories', component: ShowCategories }
]

const router = new VueRouter({
  routes: routes,
  // takes advantage of browser's api history push state
  mode: 'history'
})

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
