<template>
  <div>
    <h2>Categories</h2>
    <ul class='cleanList'>
      <li
        data-test='category-name'
        v-for='(category, slug) in categories'
        :key='slug'
      >{{ category }}</li>
    </ul>
  </div>
</template>

<script>
// import { products } from './../../products.js';
// const axios = require('axios');
// import * as app from './../../app.js';

export default {
  name: 'CategoriesPage',
  data: function() {
    return {};
  },
  methods: {
    loadCategories: function() {}
  },
  computed: {
    products: function() {
      return this.$store.state.products;
    },
    categories: function() {
      //   extracts categories from products data
      let categories = _.map(this.product, 'categories');
      //   merges categories together into an array
      let mergedCategories = [].concat.apply([], categories);
      // Returns unique, sorted categories and sorts alphabetically
      return [...new Set(mergedCategories)].sort();
    }
  }
};
</script>

<style scoped>
</style>