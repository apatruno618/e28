<template>
  <div>
    <p>Delicious Thanksgiving recipes designed to taste even better the next day</p>
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
<style>
</style>