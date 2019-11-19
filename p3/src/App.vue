<template>
  <div id='app'>
    <img id='logo' alt='TurkeyTable logo' src='./assets/turkeytable-logo.png' />
    <!-- <show-home></show-home>
    <show-categories></show-categories>
    <show-recipes></show-recipes>-->
    <nav>
      <router-link to='/' exact>Home</router-link>
      <router-link to='/recipes' exact>Recipes</router-link>
      <router-link to='/categories' exact>Categories</router-link>
    </nav>
    <router-view></router-view>

    <!-- <HelloWorld msg='Welcome to Your Vue.js App' /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import { recipes } from './recipes.js';

export default {
  name: 'app',
  // components: {
  //   ShowHome,
  //   ShowCategories,
  //   ShowRecipes
  //   // HelloWorld
  // },
  data: function() {
    return {
      recipes: recipes
    };
  }
};
</script>

<style>
@import './assets/css/turkeytable.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
