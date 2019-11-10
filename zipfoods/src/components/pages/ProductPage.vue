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

    <router-link :to='"/products"'>&larr; Return to all products</router-link>
  </div>
</template>

<script>
const axios = require('axios');

export default {
  name: 'ProductPage',
  props: ['id'],
  data: function() {
    return {
      // params gives you access to any of the parameters in a path like :id but we will instead pass the id in as a prop as shown above
      //   id: this.$route.params.id
      product: null
    };
  },
  mounted() {
    axios
      .get(
        'https://my-json-server.typicode.com/apatruno618/e28-zipfoods-api/products/' +
          this.id
      )
      .then(response => {
        this.product = response.data;
      });
  }
};
</script>

<style scoped>
</style>    