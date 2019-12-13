<template>
  <div>
    <h1>My Favorites</h1>
    <div v-if='items.length == 0'>No items</div>
    <ul data-test='favorites-contents' v-else-if='recipes'>
      <li v-for='item in items' :key='item.slug'>
        <!-- <div>{{ getRecipeDetails(item.slug)['name'] }}</div> -->
        <button
          data-test='remove-from-favorites-button'
          @click='removeFromFavorites(item.slug)'
        >Remove</button>
        {{ getRecipeDetails(item.slug)['name'] }}
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
    getRecipeDetails(recipeSlug) {
      // return this.recipes.find(({ id }) => id === recipeId);
      return this.$store.getters.getRecipeBySlug(recipeSlug);
    },
    removeFromFavorites: function(recipeSlug) {
      this.favorites.remove(recipeSlug);
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