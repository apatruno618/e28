<template>
  <div id='product-page' v-if='product'>
    <h1>{{ product.name }}</h1>
    <img
      v-if='product.id'
      class='product-thumb'
      :alt='"Product image of  " + product.name'
      :src='"./../../assets/images/products/" + product.id + ".jpg"'
    />
    <p class='description'>{{ product.description }}</p>
    <div class='price'>${{ product.price }}</div>

    <button @click='addToCart(product.id)'>Add to cart</button>

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
  props: ['id'],
  data: function() {
    return {
      product: null,
      addAlert: false
    };
  },
  mounted() {
    app.axios
      .get(
        'https://my-json-server.typicode.com/apatruno618/e28-zipfoods-api/products/' +
          this.id
      )
      .then(response => {
        this.product = response.data;
      });
  },
  methods: {
    addToCart: function(productId) {
      //   console.log(productId);
      let cart = new app.Cart();
      cart.add(productId);

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