<template>
  <div id='product-page' v-if='product'>
    <h1 data-test='product-name'>{{ product.name }}</h1>
    <img
      v-if='product.slug'
      class='product-thumb'
      :alt='"Product image of  " + product.name'
      :src='product.slug | productImage'
    />
    <p class='description'>{{ product.description }}</p>
    <div class='price'>${{ product.price }}</div>

    <button data-test='add-to-cart-button' @click='addToCart(product.slug)'>Add to cart</button>

    <!-- adds transition class to element for us  -->
    <transition name='fade'>
      <div class='alert' v-if='addAlert'>Your cart has been updated</div>
    </transition>

    <router-link :to='"/products"'>&larr; Return to all products</router-link>
  </div>
</template>

<script>
// const axios = require('axios');
import * as app from './../../app.js';

// import Cart from './../../Cart.js';

export default {
  name: 'ProductPage',
  props: ['slug'],
  data: function() {
    return {
      addAlert: false
    };
  },
  computed: {
    product: function() {
      return this.$store.getters.getProductBySlug(this.slug);
    }
  },
  mounted() {},
  methods: {
    addToCart: function(productSlug) {
      //   console.log(productSlug);
      let cart = new app.Cart();
      cart.add(productSlug);

      // app.store.cartCount = cart.count();

      this.$store.commit('updateCartCount', 1);

      this.addAlert = true;

      setTimeout(() => (this.addAlert = false), 1500);
    }
  }
};
</script>

<style scoped>
</style>    