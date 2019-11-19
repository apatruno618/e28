<template>
  <div id='app'>
    <img id='logo' alt='TurkeyTable logo' src='./assets/turkeytable-logo.png' />
    <show-home></show-home>
    <show-categories></show-categories>
    <show-recipes></show-recipes>

    <!-- <HelloWorld msg='Welcome to Your Vue.js App' /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import ShowHome from './components/ShowHome.vue';
import ShowCategories from './components/ShowCategories.vue';
import ShowRecipes from './components/ShowRecipes.vue';
import { recipes } from './recipes.js';

export default {
  name: 'app',
  components: {
    ShowHome,
    ShowCategories,
    ShowRecipes
    // HelloWorld
  },
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
