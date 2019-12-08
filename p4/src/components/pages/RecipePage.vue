<template>
  <div id='recipe-page' v-if='recipe'>
    <h1 class='recipe-name'>{{ recipe.name }}</h1>
    <img
      class='recipe-thumb'
      :alt='" Recipe image of" + recipe.name'
      :src='"./../../assets/images/recipes/" + recipe.id + ".jpg"'
    />
    <div class='recipe-level'>{{ recipe.level }}</div>
    <div class='recipe-time'>{{ recipe.time }}</div>
    <div class='recipe-yield'>{{ recipe.yield }}</div>
    <h3>Ingredients</h3>
    <ul>
      <li v-for='(ingredient, id) in ingredients' :key='id'>{{ ingredient }}</li>
    </ul>
    <h3>Directions</h3>
    <ol>
      <li v-for='(direction, id) in directions' :key='id'>{{ direction }}</li>
    </ol>
    <button @click='addToFavorites(recipe.id)'>Add to Favorites</button>
    <br />
    <router-link exact :to='"/recipes"'>&larr; Return to all recipes</router-link>
  </div>
</template>

<script>
import * as app from './../../app.js';

export default {
  name: 'RecipePage',
  props: ['id'],
  data: function() {
    return {
      recipe: null,
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
    }
  },
  mounted() {
    app.axios.get(app.config.api + this.id).then(response => {
      this.recipe = response.data;
      this.loadIngredients();
      this.loadDirections();
    });
  }
};
</script>

<style scoped>
</style>