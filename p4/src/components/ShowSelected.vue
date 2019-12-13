<template>
  <div>
    <ul v-if='recipes'>
      <li v-for='recipe in selectedCategory' :key='recipe.slug'>{{ recipe.name }}</li>
    </ul>
  </div>
</template>

<script>
import * as app from './../app.js';

export default {
  name: 'ShowSelected',
  props: ['category'],
  data: function() {
    return {
      recipes: null
    };
  },
  computed: {
    selectedCategory: function() {
      function isMatch(recipe) {
        return recipe.categories.includes(this);
      }
      // returns an array of recipes of just the recipes that meet criteria
      return this.recipes.filter(isMatch, this.category);
    }
  },
  mounted() {
    app.axios.get(app.config.api).then(response => {
      this.recipes = response.data;
    });
  }
};
</script>

<style scoped>
</style>