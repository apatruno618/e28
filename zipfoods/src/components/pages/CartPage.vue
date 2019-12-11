<template>
  <div id='cart-page'>
    <h1>Your Cart</h1>

    <div v-if='items.length == 0'>No items</div>

    <ul data-test='cart-contents' v-else-if='products' class='cleanList'>
      <!-- iterate through items data property -->
      <!-- for each, button can remove the item -->
      <li v-for='item in items' :key='item.slug'>
        <!-- pass slug for items -->
        <button data-test='remove-from-cart-button' @click='removeFromCart(item.slug)'>Remove</button>
        {{ item.quantity }} x {{ getProductDetails(item.slug)['name'] }}
      </li>
    </ul>
  </div>
</template>

<script>
import * as app from './../../app.js';

export default {
  name: 'CartPage',
  data: function() {
    return {
      items: [],
      cart: null
    };
  },
  methods: {
    getProductDetails(productSlug) {
      return this.$store.getters.getProductBySlug(productSlug);
    },
    removeFromCart: function(productSlug) {
      this.cart.remove(productSlug);
      // app.store.cartCount = this.cart.count();
      this.$store.commit('setCartCount', this.cart.count());
    }
  },
  computed: {
    products: function() {
      return this.$store.state.products;
    }
  },
  mounted() {
    this.cart = new app.Cart();
    // items is dependent on cart data property so everything is reactive
    this.items = this.cart.getItems();
  }
};
</script>