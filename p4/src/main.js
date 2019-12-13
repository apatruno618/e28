import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HomePage from './components/pages/HomePage.vue';
import CategoriesPage from './components/pages/CategoriesPage.vue';
import RecipesPage from './components/pages/RecipesPage.vue';
import RecipePage from './components/pages/RecipePage.vue';
import FavoritesPage from './components/pages/FavoritesPage.vue';
// import RecipeCreatePage from './components/pages/RecipeCreatePage.vue';

const _ = require('lodash')


// makes store object available
import store from './store'

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/recipes', component: RecipesPage, name: 'recipes' },
  // create takes precendence
  // { path: '/recipe/create', component: RecipeCreatePage, name: 'create' },
  { path: '/recipe/:slug', component: RecipePage, name: 'recipe', props: true },
  { path: '/categories', component: CategoriesPage, name: 'categories' },
  { path: '/favorites', component: FavoritesPage, name: 'favorites' }
]

const router = new VueRouter({
  routes: routes,
  // takes advantage of browser's api history push state
  mode: 'history'
})

new Vue({
  router: router,
  // injects store capabilities to all child components
  store: store,
  render: h => h(App),
}).$mount('#app')



