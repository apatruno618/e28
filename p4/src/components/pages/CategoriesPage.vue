<template>
  <div>
    <h2>Categories</h2>
    <ul>
      <li
        v-for='(category, slug) in loadCategories'
        :key='slug'
        data-test='recipe-categories'
      >{{ category }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CategoriesPage',
  data: function() {
    return {};
  },
  methods: {},
  computed: {
    recipes: function() {
      return this.$store.state.recipes;
    },
    loadCategories: function() {
      // extracts categories from recipes data
      let categories = _.map(this.recipes, 'categories');
      let mergedCategories = [].concat.apply([], categories);

      // returns unique, sorted categories
      return [...new Set(mergedCategories)].sort();
    }
  },
  mounted() {}
};
</script>

<style scoped>
</style>