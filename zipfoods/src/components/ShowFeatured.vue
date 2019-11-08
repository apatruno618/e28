<template>
  <div id='featured'>
    <h2>Featured Products</h2>
    <ul class='cleanList'>
      <li v-for='product in featuredProducts' :key='product.id'>{{ product.name }}</li>
    </ul>
  </div>
</template>

<script>
import { products } from './../products.js';

export default {
  name: 'ShowFeatured',
  props: ['category'],
  computed: {
    featuredProducts: function() {
      //   goes into each product, goes into category and sees if this is in the category
      function isMatch(product) {
        return product.categories.includes(this);
      }
      //   filters product data property using isMatch
      //   returns an array of products that meets our criteria
      return this.products.filter(isMatch, this.category);
    }
  },
  data: function() {
    return {
      products: products
    };
  }
};
</script>

<style scoped>
</style>