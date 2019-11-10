<template>
  <div id='products'>
    <h2>Products</h2>
    <show-product v-for='product in products' :key='product.id' :product='product'></show-product>
  </div>
</template>

<script>
import ShowProduct from './../ShowProduct.vue';
// import { products } from './../../products.js';
const axios = require('axios');

export default {
  name: 'ProductsPage',
  components: { ShowProduct },
  data: function() {
    return {
      products: null
    };
  },
  // executed once vue instance is mounted
  mounted() {
    axios
      .get(
        'https://my-json-server.typicode.com/apatruno618/e28-zipfoods-api/products'
      )
      .then(response => {
        this.products = response.data;
      });
  }
};
</script>

<style scoped>
</style>