<template>
  <div>
    <h2>Categories</h2>
    <ul>
      <li v-for='(category, id) in categories' :key='id'>{{ category }}</li>
    </ul>
  </div>
</template>

<script>
// import * as app from './../../app.js';

export default {
  name: 'CategoriesPage',
  data: function() {
    return {
      // recipes: null,
      // categories: null
    };
  },
  methods: {
    // loadCategories: function() {
    //   // extracts categories from recipes data
    //   let categories = this.recipes.map(recipe => recipe.categories);
    //   let mergedCategories = [].concat.apply([], categories);
    //   // returns unique, sorted categories
    //   this.categories = [...new Set(mergedCategories)].sort();
    // }
  },
  computed: {
    recipes: function() {
      return this.$store.state.recipes;
    },
    loadCategories: function() {
      // extracts categories from recipes data
      let categories = this.recipes.map(recipe => recipe.categories);
      let mergedCategories = [].concat.apply([], categories);

      // let categories = _.map(this.recipes, 'categories');
      // let mergedCategories = [].concat.apply([], categories);

      // returns unique, sorted categories
      return [...new Set(mergedCategories)].sort();
    }
  },
  mounted() {
    // app.axios.get(app.config.api).then(response => {
    //   this.recipes = response.data;
    //   this.loadCategories();
    // });
  }
};
</script>

<style scoped>
</style>