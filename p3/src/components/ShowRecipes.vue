<template>
  <div>
    <h2>All Recipes</h2>
    <div id='recipes' class='grid-container grid-container--fit'>
      <show-recipe v-for='recipe in recipes' :key='recipe.id' :recipe='recipe'></show-recipe>
    </div>
  </div>
</template>

<script>
import ShowRecipe from './ShowRecipe.vue';
import { recipes } from './../recipes.js';

export default {
  name: 'ShowRecipes',
  components: { ShowRecipe },
  data: function() {
    return {
      recipes: recipes
    };
  }
};
</script>

<style scoped>
</style>