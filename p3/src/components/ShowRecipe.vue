// child component of ShowRecipes
<template>
  <div class='recipe'>
    <div class='recipe-name'>{{ recipe.name }}</div>
    <img
      class='recipe-thumb'
      :alt='" Recipe image of" + recipe.name  '
      :src='"./../assets/images/recipes/" + recipe.id + ".jpg" '
    />
    <div class='recipe-level'>{{ recipe.level }}</div>
    <div class='recipe-time'>{{ recipe.time }}</div>
    <div class='recipe-yield'>{{ recipe.yield }}</div>
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