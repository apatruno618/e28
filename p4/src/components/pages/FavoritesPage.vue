<template>
  <div>
    <h1>My Favorites</h1>
    <div v-if='items.length == 0'>No items</div>
    <ul data-test='favorites-contents' v-else-if='recipes.length > 0'>
      <li v-for='item in items' :key='item.id'>
        <!-- <div>{{ getRecipeDetails(item.id)['name'] }}</div> -->
        <button
          data-test='remove-from-favorites-button'
          @click='removeFromFavorites(item.id)'
        >Remove</button>
        {{ getRecipeDetails(item.id)['name'] }}
      </li>
    </ul>
  </div>
</template>

<script>
import * as app from './../../app.js';

export default {
  name: 'FavoritesPage',
  data: function() {
    return {
      items: [],
      favorites: null
    };
  },
  methods: {
    getRecipeDetails(recipeId) {
      return this.recipes.find(({ id }) => id === recipeId);
    },
    removeFromFavorites: function(recipeId) {
      this.favorites.remove(recipeId);
      this.$store.commit('setFavoritesCount', this.favorites.count());
    }
  },
  computed: {
    recipes: function() {
      return this.$store.state.recipes;
    }
  },
  mounted() {
    this.favorites = new app.Favorites();
    this.items = this.favorites.getItems();
  }
};
</script>

<style scoped>
</style>