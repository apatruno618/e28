import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HomePage from './components/pages/HomePage.vue';
import CategoriesPage from './components/pages/CategoriesPage.vue';
import RecipesPage from './components/pages/RecipesPage.vue';
import RecipePage from './components/pages/RecipePage.vue';
import FavoritesPage from './components/pages/FavoritesPage.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/recipes', component: RecipesPage, name: 'recipes' },
  { path: '/recipe/:id', component: RecipePage, name: 'recipe', props: true },
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
  render: h => h(App),
}).$mount('#app')
