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
            <span v-if='link == "cart"'>({{ sharedState.cartCount }})</span>
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
      links: ['home', 'products', 'categories', 'cart'],
      cartCount: null,
      sharedState: app.store
    };
  },
  mounted() {
    // Store/update a key/value pair, its a key value pair system
    // localStorage.setItem('name', 'Bob');

    // Retrieve (by key)
    // console.log(localStorage.getItem('name'));

    // Remove (by key) key/value pair
    // localStorage.removeItem('name');

    // let userObj = {
    //   firstName: 'Jamal',
    //   lastName: 'Jones',
    //   email: 'jjones@gmail.com'
    // };

    // localStorage.setItem('user', JSON.stringify(userObj));

    let userObj = JSON.parse(localStorage.getItem('user'));
    console.log(userObj.firstName);
    this.cart = new app.Cart();
    // this.cartCount = this.cart.count();
    app.store.cartCount = this.cart.count();
  }
};
</script>

<style lang='scss'>
@import './assets/css/zipfoods.scss';
</style>
