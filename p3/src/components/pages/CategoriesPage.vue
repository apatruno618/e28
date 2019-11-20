<template>
  <div>
    <h2>Categories</h2>
    <ul>
      <li v-for='(category, id) in categories' :key='id'>{{ category }}</li>
    </ul>
  </div>
</template>

<script>
import { recipes } from './../../recipes.js';

export default {
  name: 'CategoriesPage',
  data: function() {
    return {
      recipes: recipes
    };
  },
  computed: {
    categories: function() {
      // extracts categories from recipes data
      let categories = this.recipes.map(recipe => recipe.categories);
      let mergedCategories = [].concat.apply([], categories);

      //   returns unique, sorted categories
      return [...new Set(mergedCategories)].sort();
    }
  }
};
</script>

<style scoped>
</style>