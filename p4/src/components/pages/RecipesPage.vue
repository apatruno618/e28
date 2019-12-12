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
// import * as app from './../../app.js';

export default {
  name: 'RecipesPage',
  components: { ShowRecipe },
  data: function() {
    return {
      // recipes: null
    };
  },
  computed: {
    recipes: function() {
      return this.$store.state.recipes;
    }
  },
  mounted() {
    // app.axios
    //   .get(app.config.api)
    //   .then(response => {
    //     this.recipes = response.data;
    //   });
  }
};
</script>

<style scoped>
</style>