<template>
  <div>
    <h2 class='a'>{{ selectedCategory }} recipes</h2>
    <show-selected :category='selectedCategory'></show-selected>
  </div>
</template>
<script>
import ShowSelected from './../ShowSelected.vue';

export default {
  name: 'HomePage',
  components: { ShowSelected },
  data: function() {
    return {
      selectedCategory: 'vegan'
    };
  }
};
</script>
<style scoped>
p {
  text-align: left;
}
h2.a {
  text-transform: capitalize;
}
</style>