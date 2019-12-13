<template>
  <div>
    <h2 class='a'>Welcome!</h2>
    <div>The holidays are meant for spending time with friends and family but if you're hosting, things can get pretty stressful.</div>
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
      selectedCategory: 'side dish'
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