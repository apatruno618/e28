<template>
  <div>
    <h2>Recipes of Selected Category</h2>
    <ul>
      <li v-for='recipe in selectedCategory' :key='recipe.id'>{{ recipe.name }}</li>
    </ul>
  </div>
</template>

<script>
import { recipes } from './../recipes.js';

export default {
  name: 'ShowSelected',
  computed: {
    selectedCategory: function() {
      function isMatch(recipe) {
        return recipe.categories.includes(this);
      }
      // returns an array of recipes of just the recipes that meet criteria
      return this.recipes.filter(isMatch, this.category);
    }
  },
  data: function() {
    return {
      category: 'non-vegan',
      recipes: recipes
    };
  }
};
</script>

<style scoped>
</style>