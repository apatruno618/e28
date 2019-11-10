<template>
  <div id='product-page'>
    <h1>Product {{ id }}</h1>
  </div>
</template>

<script>
export default {
  name: 'ProductPage',
  props: ['id'],
  data: function() {
    return {
      // params gives you access to any of the parameters in a path like :id but we will instead pass the id in as a prop as shown above
      //   id: this.$route.params.id
    };
  }
};
</script>

<style scoped>
</style>    