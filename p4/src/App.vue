<template>
  <div id='app'>
    <h1>TurkeyTable</h1>
    <p>Delicious Thanksgiving recipes designed to taste even better the next day</p>
    <img id='logo' alt='TurkeyTable logo' src='./assets/turkeytable-logo.png' />
    <nav class='topnav'>
      <ul>
        <li v-for='link in links' :key='link'>
          <router-link exact :to='{ name: link }'>
            {{ link }}
            <span v-if='link == "favorites"'>({{ favoritesCount }})</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import * as app from './app.js';

export default {
  name: 'app',
  data: function() {
    return {
      // add 'create' when component is created
      links: ['home', 'recipes', 'categories', 'favorites', 'create']
    };
  },
  computed: {
    favoritesCount: function() {
      return this.$store.state.favoritesCount;
    }
  },
  mounted() {
    this.favorites = new app.Favorites();
    // sets store from local storage
    this.$store.commit('setFavoritesCount', this.favorites.count());
    // console.log(this.$store.state.favoritesCount);

    // will dispatch the action that will make the server request to get the recipes
    this.$store.dispatch('setRecipes');
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
