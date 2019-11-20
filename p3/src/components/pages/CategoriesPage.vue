<template>
  <div>
    <h2>Categories</h2>
    <ul>
      <li v-for='(category, id) in categories' :key='id'>{{ category }}</li>
    </ul>
  </div>
</template>

<script>
// import { recipes } from './../../recipes.js';
const axios = require('axios');

export default {
  name: 'CategoriesPage',
  data: function() {
    return {
      recipes: null,
      categories: null
    };
  },
  methods: {
    loadCategories: function() {
      // extracts categories from recipes data
      let categories = this.recipes.map(recipe => recipe.categories);
      let mergedCategories = [].concat.apply([], categories);

      //   returns unique, sorted categories
      this.categories = [...new Set(mergedCategories)].sort();
    }
  },
  mounted() {
    axios
      .get(
        'https://my-json-server.typicode.com/apatruno618/e28-p3-api/recipes/'
      )
      .then(response => {
        this.recipes = response.data;
        this.loadCategories();
      });
  }
};
</script>

<style scoped>
</style>