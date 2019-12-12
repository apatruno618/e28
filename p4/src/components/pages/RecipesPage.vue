<template>
  <div>
    <h2>All Recipes</h2>
    <div id='recipes' class='grid-container grid-container--fit'>
      <show-recipe v-for='recipe in recipes' :key='recipe.id' :recipe='recipe'></show-recipe>
    </div>
  </div>
</template>

<script>
import ShowRecipe from './../ShowRecipe.vue';

export default {
  name: 'RecipesPage',
  components: { ShowRecipe },
  data: function() {
    return {};
  },
  computed: {
    recipes: function() {
      return this.$store.state.recipes;
    }
  },
  mounted() {}
};
</script>

<style scoped>
</style>