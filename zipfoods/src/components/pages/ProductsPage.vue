<template>
  <div id='products'>
    <h2>Products</h2>
    <show-product v-for='product in products' :key='product.id' :product='product'></show-product>
  </div>
</template>

<script>
import ShowProduct from './../ShowProduct.vue';

export default {
  name: 'ProductsPage',
  components: { ShowProduct },
  data: function() {
    return {};
  },
  // executed once vue instance is mounted
  mounted() {},
  computed: {
    products: function() {
      return this.$store.state.products;
    }
  }
};
</script>

<style scoped>
</style>