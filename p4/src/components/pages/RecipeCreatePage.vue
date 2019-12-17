<template>
  <div id='recipe-create'>
    <h1>Add a Recipe</h1>
    <!-- prevent overrides default behavior that a form has in a page 
    which is to submit form to server-->
    <form @submit.prevent='handleSubmit'>
      <!-- recipe slug -->
      <div>
        <label for='name'>URL</label>
        <!-- unique identifier in form of slug -->
        <!-- a slug is a simplified url-friendly version of a string -->
        <input type='text' id='slug' v-model='$v.recipe.slug.$model' />
        <!-- if there are any errors, this will show -->
        <div v-if='$v.recipe.slug.$error'>
          <div class='form-feedback-error' v-if='!$v.recipe.slug.required'>Recipe URL required.</div>
          <div
            class='form-feedback-error'
            v-if='!$v.recipe.slug.minLength'
          >Recipe's URL must be at least 4 characters long.</div>
          <div
            class='form-feedback-error'
            v-if='!$v.recipe.slug.doesNotExist'
          >This URL is not available.</div>
        </div>
        <small class='form-help'>Min: 4</small>
      </div>

      <!-- recipe name -->
      <div>
        <label for='name'>Name</label>
        <input type='text' id='name' v-model='$v.recipe.name.$model' />
        <div v-if='$v.recipe.name.$error'>
          <div class='form-feedback-error' v-if='!$v.recipe.name.required'>Recipe name is required.</div>
        </div>
      </div>

      <!-- recipe level -->
      <div>
        <label for='level'>Level</label>
        <br />
        <select name='level' v-model='$v.recipe.level.$model'>
          <option value='easy'>Easy</option>
          <option value='intermediate'>Intermediate</option>
          <option value='difficult'>Difficult</option>
        </select>
        <div v-if='$v.recipe.level.$error'>
          <div
            class='form-feedback-error'
            v-if='!$v.recipe.level.required'
          >Recipe level is required.</div>
        </div>
      </div>

      <!-- recipe time -->
      <div>
        <label for='time'>Time</label>
        <input type='text' id='time' v-model='$v.recipe.time.$model' />
        <div v-if='$v.recipe.time.$error'>
          <div class='form-feedback-error' v-if='!$v.recipe.time.required'>Recipe time is required.</div>
        </div>
      </div>

      <!-- recipe yield -->
      <div>
        <label for='yield'>Yield</label>
        <input type='text' id='yield' v-model='$v.recipe.yield.$model' />
        <div v-if='$v.recipe.yield.$error'>
          <div
            class='form-feedback-error'
            v-if='!$v.recipe.yield.required'
          >recipe yield is required.</div>
        </div>
      </div>

      <!-- recipe special equipment -->
      <div>
        <label for='special_equipment'>Special Equipment</label>
        <input type='text' id='special-equipment' v-model='recipe.special_equipment' />
      </div>

      <!-- recipe ingredients -->
      <div>
        <label for='ingredients'>Ingredients</label>
        <input type='text' id='ingredients' v-model='$v.recipe.ingredients.$model' />
        <small id='ingredientsHelp' class='form-help'>Comma separated</small>
        <div v-if='$v.recipe.ingredients.$error'>
          <div
            class='form-feedback-error'
            v-if='!$v.recipe.ingredients.required'
          >Ingredients are required.</div>
        </div>
      </div>

      <!-- recipe directions -->
      <div>
        <label for='directions'>Directions</label>
        <br />
        <textarea rows='4' cols='60' id='directions' v-model='$v.recipe.directions.$model'></textarea>
        <div v-if='$v.recipe.directions.$error'>
          <div
            class='form-feedback-error'
            v-if='!$v.recipe.directions.required'
          >Directions are required.</div>
        </div>
      </div>

      <!-- recipe categories -->
      <div>
        <label for='categories'>Categories</label>
        <input type='text' id='categories' v-model='$v.recipe.categories.$model' />
        <small id='categoriesHelp' class='form-help'>Comma separated</small>
        <div v-if='$v.recipe.categories.$error'>
          <div
            class='form-feedback-error'
            v-if='!$v.recipe.categories.required'
          >Categories are required.</div>
        </div>
      </div>

      <button type='submit'>Add recipe</button>
      <!-- global error notification -->
      <div class='form-feedback-error' v-if='formHasErrors'>Please correct the above errors</div>
    </form>
  </div>
</template>

<script>
import * as app from './../../app.js';
// import the validators you're using
import { required, minLength } from 'vuelidate/lib/validators';

let recipe = {};
// If in dev mode, we pre-fill the recipe to make demo/testing easier
if (process.env.NODE_ENV == 'development') {
  recipe = {
    slug: 'annas-baked-ziti',
    name: "Anna's Baked Ziti",
    level: 'easy',
    time: '1hr 30 min',
    yield: '10 servings',
    special_equipment: 'baking dish',
    ingredients: ['ziti pasta', 'tomato sauce', 'mozzarella cheese'],
    directions: [
      'Make the sauce',
      'Make the pasta.',
      'Mix the pasta and sauce and bake.'
    ],
    categories: ['entree', 'non-vegan']
  };
} else {
  recipe = {
    slug: '',
    name: '',
    level: '',
    time: '',
    yield: '',
    special_equipment: null,
    ingredients: [],
    directions: [],
    categories: []
  };
}
export default {
  name: 'RecipeCreatePage',
  data: function() {
    return {
      recipe: recipe,
      formHasErrors: false
    };
  },
  // initializes validators
  validations: {
    recipe: {
      slug: {
        required,
        minLength: minLength(4),
        // custom function for validation
        doesNotExist(value) {
          // returns true or false
          return !this.$store.getters.getRecipeBySlug(value);
        }
      },
      name: { required },
      level: { required },
      time: { required },
      yield: { required },
      ingredients: { required },
      directions: { required },
      categories: { required }
    }
  },
  // watches for any errors
  watch: {
    //   for global errors
    '$v.$anyError': function() {
      // toggling effect
      this.formHasErrors = this.$v.$anyError;
    }
  },
  methods: {
    handleSubmit: function() {
      // validate recipe information from the form
      if (!this.formHasErrors) {
        // Axios request to the server to persist the new recipe
        app.axios
          // post indicates to firebase that we want to change/persist changes to recipes.json
          // this.recipe is what we want to pass along in the post request
          .post(app.config.api + 'recipes.json', this.recipe)
          .then(response => {
            // this is the unique key firebase returns from adding a new recipe
            let key = response.data.name;

            // Update Vuex store with an action or mutation using the key firebase returned
            this.$store.commit('addRecipe', { [key]: this.recipe });

            // sends user to the page of the new recipe using programmatic navigation
            this.$router.push({
              name: 'recipe',
              params: { slug: this.recipe.slug }
            });
          });
      }
    }
  }
};
</script>

<style scoped>
#description {
  height: 150px;
}

form {
  align-content: left;
  text-align: left;
}

input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  /* border-bottom: 2px solid red; */
}

.form-feedback-error {
  font-weight: bold;
  color: darkred;
}
</style>