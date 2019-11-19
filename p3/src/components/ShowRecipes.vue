<template>
  <div>
    <h2>Recipes</h2>
    <div id='recipes' class='grid-container grid-container--fit'>
      <show-recipe v-for='recipe in recipes' :key='recipe.id' :recipe='recipe'></show-recipe>
    </div>
  </div>
</template>

<script>
import ShowRecipe from './ShowRecipe.vue';

export default {
  name: 'ShowRecipes',
  props: ['recipes'],
  components: { ShowRecipe }
};
</script>

<style scoped>
</style>