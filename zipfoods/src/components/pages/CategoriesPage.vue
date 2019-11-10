<template>
  <div>
    <h2>Categories</h2>
    <ul class='cleanList'>
      <li v-for='(category, id) in categories' :key='id'>{{ category }}</li>
    </ul>
  </div>
</template>

<script>
// import { products } from './../../products.js';
const axios = require('axios');

export default {
  name: 'CategoriesPage',
  data: function() {
    return {
      products: null,
      categories: null
    };
  },
  methods: {
    loadCategories: function() {
      //   extracts categories from products data
      let categories = this.products.map(product => product.categories);
      //   merges categories together into an array
      let mergedCategories = [].concat.apply([], categories);

      // Returns unique, sorted categories and sorts alphabetically
      this.categories = [...new Set(mergedCategories)].sort();
    }
  },
  mounted() {
    axios
      .get(
        'https://my-json-server.typicode.com/apatruno618/e28-zipfoods-api/products'
      )
      .then(response => {
        this.products = response.data;
        // categories will not get loaded until page is mounted
        this.loadCategories();
      });
  }
};
</script>

<style scoped>
</style>