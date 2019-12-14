<template>
  <div>
    <h1 class='a'>Welcome!</h1>
    <h4>
      The holidays are meant for spending time with friends and family but if you're hosting, things can get pretty stressful.
      <br />TurkeyTable is here to help ease the burden of figuring out what to cook.
      <br />We have recipes for the meat-lovers, the vegans and your great uncle with the wicked sweet tooth.
    </h4>
    Here's some of our {{ selectedCategory }} recipes:
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
h2.a {
  text-transform: capitalize;
}
</style>