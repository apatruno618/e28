<template>
  <div id='app'>
    <img id='logo' alt='ZipFoods logo' src='./assets/images/zipfoods-logo.png' />

    <nav>
      <ul>
        <!-- <li v-for='link in links' :key='link'>
          <router-link exact :to='paths[link]'>{{ link }}</router-link>
          <router-link exact :to='{ name: link }'>{{ link }}</router-link>
        </li>-->
        <li v-for='link in links' :key='link'>
          <router-link exact :to='{ name: link }'>
            {{ link }}
            <!-- cart count -->
            <span data-test='cart-count' v-if='link == "cart"'>({{ cartCount }})</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import * as app from './app.js';

import { products } from './products.js';

export default {
  name: 'app',
  components: {},
  data: function() {
    return {
      products: products,
      // src/App.vue data properties
      links: ['home', 'products', 'categories', 'cart']
    };
  },
  computed: {
    cartCount: function() {
      // if cartCount is changed in main store, it will reflect in this child component
      return this.$store.state.cartCount;
    }
  },
  mounted() {
    this.cart = new app.Cart();
    // app.store.cartCount = this.cart.count();
    // sets store from local storage
    this.$store.commit('setCartCount', this.cart.count());
    // will make the server request to get products data by calling mutation
    this.$store.dispatch('setProducts');
  }
};
</script>

<style lang='scss'>
@import './assets/css/zipfoods.scss';
</style>
