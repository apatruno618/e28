// child component of ShowRecipes
<template>
  <div class='recipe'>
    <!-- data-test is a custom attribute for test selector -->
    <router-link data-test='recipe-link' :to='{ name: "recipe", params: {"slug" : recipe.slug }}'>
      <div data-test='recipe-name' class='recipe-name'>{{ recipe.name }}</div>
      <img
        class='recipe-thumb'
        :alt='" Recipe image of" + recipe.name'
        :src='recipe.slug | recipeImage'
      />
      <div class='recipe-level'>{{ recipe.level }}</div>
      <div class='recipe-time'>{{ recipe.time }}</div>
      <div class='recipe-yield'>{{ recipe.yield }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ShowRecipe',
  props: ['recipe']
};
</script>

<style scoped>
</style>