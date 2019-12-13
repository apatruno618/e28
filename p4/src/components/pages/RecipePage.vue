<template>
  <div id='recipe-page' v-if='recipe'>
    <h1 data-test='recipe-name' class='recipe-name'>{{ recipe.name }}</h1>
    <img
      class='recipe-thumb'
      :alt='" Recipe image of" + recipe.name'
      :src='"./../../assets/images/recipes/" + recipe.slug + ".jpg"'
    />
    <div class='recipe-level'>{{ recipe.level }}</div>
    <div class='recipe-time'>{{ recipe.time }}</div>
    <div class='recipe-yield'>{{ recipe.yield }}</div>
    <h3>Ingredients</h3>
    <ul>
      <li v-for='(ingredient, slug) in ingredients' :key='slug'>{{ ingredient }}</li>
    </ul>
    <h3>Directions</h3>
    <ol>
      <li v-for='(direction, slug) in directions' :key='slug'>{{ direction }}</li>
    </ol>
    <button
      data-test='add-to-favorites-button'
      @click='addToFavorites(recipe.slug)'
    >Add to Favorites</button>
    <br />
    <router-link exact :to='"/recipes"'>&larr; Return to all recipes</router-link>
  </div>
</template>

<script>
import * as app from './../../app.js';
// import Favorites from './../../../Favorites.js';

export default {
  name: 'RecipePage',
  props: ['slug'],
  data: function() {
    return {
      ingredients: null,
      directions: null
    };
  },
  methods: {
    loadIngredients: function() {
      this.ingredients = this.recipe.ingredients;
    },
    loadDirections: function() {
      this.directions = this.recipe.directions;
    },
    addToFavorites: function(recipeId) {
      let favorites = new app.Favorites();
      favorites.add(recipeId);

      this.$store.commit('setFavoritesCount', this.favorites.count());
    }
  },
  computed: {
    recipe: function() {
      return this.$store.getters.getRecipeBySlug(this.slug);
    }
  },
  mounted() {
    this.loadIngredients();
    this.loadDirections();
  }
};
</script>

<style scoped>
</style>