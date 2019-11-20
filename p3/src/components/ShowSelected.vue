<template>
  <div>
    <ul>
      <li v-for='recipe in selectedCategory' :key='recipe.id'>{{ recipe.name }}</li>
    </ul>
  </div>
</template>

<script>
import { recipes } from './../recipes.js';

export default {
  name: 'ShowSelected',
  props: ['category'],
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
      recipes: recipes
    };
  }
};
</script>

<style scoped>
</style>