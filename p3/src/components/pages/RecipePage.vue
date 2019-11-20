<template>
  <div id='recipe-page'>
    <h1>Recipe {{ id }}</h1>
  </div>
</template>

<script>
export default {
  name: 'RecipePage',
  props: ['id'],
  data: function() {
    return {};
  }
};
</script>

<style scoped>
</style>