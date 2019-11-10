<template>
  <div>
    <h2>Categories</h2>
    <ul class='cleanList'>
      <li v-for='(category, id) in categories' :key='id'>{{ category }}</li>
    </ul>
  </div>
</template>

<script>
import { products } from './../../products.js';

export default {
  name: 'CategoriesPage',
  data: function() {
    return {
      products: products
    };
  },
  computed: {
    categories: function() {
      //   extracts categories from products data
      let categories = this.products.map(product => product.categories);
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