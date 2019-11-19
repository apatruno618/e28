<template>
  <div id='app'>
    <img id='logo' alt='TurkeyTable logo' src='./assets/turkeytable-logo.png' />
    <p>Delicious Thanksgiving recipes designed to taste even better the next day</p>
    <show-selected></show-selected>
    <show-recipes></show-recipes>
    <!-- <HelloWorld msg='Welcome to Your Vue.js App' /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import ShowSelected from './components/ShowSelected.vue';
import ShowRecipes from './components/ShowRecipes.vue';
import { recipes } from './recipes.js';

export default {
  name: 'app',
  components: {
    ShowSelected,
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
