<template>
  <div id='recipe-create'>
    <h1>Add a Recipe</h1>
    <!-- prevent overrides default behavior that a form has in a page 
    which is to submit form to server-->
    <form @submit.prevent='handleSubmit'>
      <div class='form-group'>
        <label for='name'>URL</label>
        <!-- unique identifier in form of slug -->
        <!-- a slug is a simplified url-friendly version of a string -->
        <input
          type='text'
          :class='{ "form-input-error": $v.recipe.slug.$error}'
          id='slug'
          v-model='$v.recipe.slug.$model'
        />
        <!-- if there are any errors, this will show -->
        <div v-if='$v.recipe.slug.$error'>
          <div class='form-feedback-error' v-if='!$v.recipe.slug.required'>recipe URL required.</div>
          <div
            class='form-feedback-error'
            v-if='!$v.recipe.slug.minLength'
          >recipe URL must be at least 4 characters long.</div>
          <div
            class='form-feedback-error'
            v-if='!$v.recipe.slug.doesNotExist'
          >This URL not available.</div>
        </div>
        <small class='form-help'>Min: 4</small>
      </div>

      <div class='form-group'>
        <label for='name'>Name</label>
        <input
          type='text'
          :class='{ "form-input-error": $v.recipe.name.$error}'
          id='name'
          v-model='$v.recipe.name.$model'
        />
        <div v-if='$v.recipe.name.$error'>
          <div class='form-feedback-error' v-if='!$v.recipe.name.required'>recipe name is required</div>
        </div>
      </div>

      <div class='form-group'>
        <label for='description'>Description</label>
        <textarea id='description' v-model='recipe.description'></textarea>
      </div>

      <div class='form-group'>
        <label for='price'>Price</label>
        <input type='text' id='price' v-model='recipe.price' />
      </div>

      <div class='form-group'>
        <label for='weight'>Weight</label>
        <input type='text' id='weight' v-model='recipe.weight' />
        <small class='form-help'>Decimal value in lbs.</small>
      </div>

      <div class='form-group'>
        <label for='categories'>Categories</label>

        <input type='text' id='categories' v-model='recipe.categories' />
        <small id='categoriesHelp' class='form-help'>Comma separated</small>
      </div>

      <div class='form-group'>
        <label class='form-checkbox-label'>
          <input type='checkbox' v-model='recipe.perishable' /> Perishable
        </label>
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
// If in dev mode, we'll pre-fill the recipe to make demo/testing easier
if (process.env.NODE_ENV == 'development') {
  recipe = {
    slug: 'indiana-gourmet-kettlecorn-popcorn',
    name: 'Indiana Gourmet Kettlecorn Popcorn',
    description:
      'We combine the finest popping corn, the right amount of salt and pure sugar cane, then we heat it just right, so that the sugar is melting just as the corn starts to pop—leaving every piece with a thin shell of salty sweetness. Be careful, it’s hard to eat just one bite of our handcrafted, gluten free Original Kettlecorn. Munch Better.',
    price: 4.49,
    weight: 0.44,
    perishable: false,
    categories: ['snacks', 'gluten-free']
    // slug: 'annas-baked-ziti',
    // name: 'Anna's Baked Ziti',
    // level: 'easy',
    // time: '1hr 30 min',
    // yield: '10 servings',
    // special_equipment: null,
    // ingredients: ['ziti pasta', 'tomato sauce', 'mozzarella cheese'],
    // directions: ['Make the sauce', 'Make the pasta.', 'Mix the pasta and sauce and bake.' ],
    // categories: ['entree', 'non-vegan']
  };
} else {
  recipe = {
    slug: '',
    name: '',
    description: '',
    price: '',
    weight: '',
    perishable: false,
    categories: []
    // slug: '',
    // name: '',
    // level: '',
    // time: '',
    // yield: '',
    // special_equipment: null,
    // ingredients: [],
    // directions: [],
    // categories: []
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
      name: {
        required
      }
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
  border-bottom: 2px solid red;
}
</style>