<template>
  <div>
    <h2>All Recipes</h2>
    <div id='recipes' class='grid-container grid-container--fit'>
      <show-recipe v-for='recipe in recipes' :key='recipe.id' :recipe='recipe'></show-recipe>
    </div>
  </div>
</template>

<script>
import ShowRecipe from './../ShowRecipe.vue';
// import { recipes } from './../../recipes.js';
const axios = require('axios');

export default {
  name: 'RecipesPage',
  components: { ShowRecipe },
  data: function() {
    return {
      recipes: null
    };
  },
  mounted() {
    axios
      .get('https://my-json-server.typicode.com/apatruno618/e28-p3-api/recipes')
      .then(response => {
        this.recipes = response.data;
      });
  }
};
</script>

<style scoped>
</style>