<template>
  <div id='app'>
    <img id='logo' alt='TurkeyTable logo' src='./assets/turkeytable-logo.png' />
    <nav class='topnav'>
      <ul>
        <li v-for='link in links' :key='link'>
          <router-link exact :to='{ name: link }'>{{ link }}</router-link>
        </li>
      </ul>
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
      recipes: recipes,
      links: ['home', 'recipes', 'categories']
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
