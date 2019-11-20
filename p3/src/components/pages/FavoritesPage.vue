<template>
  <div>
    <h1>My Favorites</h1>
    <div v-if='items.length == 0'>No items</div>
    <ul v-else-if='recipes.length > 0'>
      <li v-for='item in items' :key='item.id'>
        <div>{{ getRecipeDetails(item.id)['name'] }}</div>
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
      favorites: null,
      recipes: []
    };
  },
  methods: {
    getRecipeDetails(recipeId) {
      return this.recipes.find(({ id }) => id === recipeId);
    }
  },
  mounted() {
    this.favorites = new app.Favorites();
    this.items = this.favorites.getItems();
    app.axios.get(app.config.api).then(response => {
      this.recipes = response.data;
    });
  }
};
</script>

<style scoped>
</style>