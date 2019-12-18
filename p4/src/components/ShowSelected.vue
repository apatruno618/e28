<template>
  <div data-test='recipe-selected-category'>
    <ul v-if='recipes'>
      <li v-for='recipe in selectedCategory' :key='recipe.slug'>{{ recipe.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ShowSelected',
  props: ['category'],
  data: function() {
    return {};
  },
  computed: {
    selectedCategory: function() {
      return _.filter(this.recipes, recipe => {
        return recipe.categories.includes(this.category);
      });
    },
    recipes: function() {
      return this.$store.state.recipes;
    }
  }
};
</script>

<style scoped>
</style>