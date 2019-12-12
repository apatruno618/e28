<template>
  <div id='product-create'>
    <h1>Add a Product</h1>
    <!-- prevent overrides default behavior that a form has in a page 
    which is to submit form to server-->
    <form @submit.prevent='handleSubmit'>
      <div class='form-group'>
        <label for='name'>URL</label>
        <!-- unique identifier in form of slug -->
        <!-- a slug is a simplified url-friendly version of a string -->
        <input
          type='text'
          :class='{ "form-input-error": $v.product.slug.$error}'
          id='slug'
          v-model='$v.product.slug.$model'
        />
        <!-- if there are any errors, this will show -->
        <div v-if='$v.product.slug.$error'>
          <div class='form-feedback-error' v-if='!$v.product.slug.required'>Product URL required.</div>
          <div
            class='form-feedback-error'
            v-if='!$v.product.slug.minLength'
          >Product URL must be at least 4 characters long.</div>
          <div
            class='form-feedback-error'
            v-if='!$v.product.slug.doesNotExist'
          >This URL not available.</div>
        </div>
        <small class='form-help'>Min: 4</small>
      </div>

      <div class='form-group'>
        <label for='name'>Name</label>
        <input
          type='text'
          :class='{ "form-input-error": $v.product.name.$error}'
          id='name'
          v-model='$v.product.name.$model'
        />
        <div v-if='$v.product.name.$error'>
          <div class='form-feedback-error' v-if='!$v.product.name.required'>Product name is required</div>
        </div>
      </div>

      <div class='form-group'>
        <label for='description'>Description</label>
        <textarea id='description' v-model='product.description'></textarea>
      </div>

      <div class='form-group'>
        <label for='price'>Price</label>
        <input type='text' id='price' v-model='product.price' />
      </div>

      <div class='form-group'>
        <label for='weight'>Weight</label>
        <input type='text' id='weight' v-model='product.weight' />
        <small class='form-help'>Decimal value in lbs.</small>
      </div>

      <div class='form-group'>
        <label for='categories'>Categories</label>

        <input type='text' id='categories' v-model='product.categories' />
        <small id='categoriesHelp' class='form-help'>Comma separated</small>
      </div>

      <div class='form-group'>
        <label class='form-checkbox-label'>
          <input type='checkbox' v-model='product.perishable' /> Perishable
        </label>
      </div>

      <button type='submit'>Add Product</button>
      <!-- global error notification -->
      <div class='form-feedback-error' v-if='formHasErrors'>Please correct the above errors</div>
    </form>
  </div>
</template>

<script>
import * as app from './../../app.js';
// import the validators you're using
import { required, minLength } from 'vuelidate/lib/validators';

let product = {};
// If in dev mode, we'll pre-fill the product to make demo/testing easier
if (process.env.NODE_ENV == 'development') {
  product = {
    slug: 'indiana-gourmet-kettlecorn-popcorn',
    name: 'Indiana Gourmet Kettlecorn Popcorn',
    description:
      'We combine the finest popping corn, the right amount of salt and pure sugar cane, then we heat it just right, so that the sugar is melting just as the corn starts to pop—leaving every piece with a thin shell of salty sweetness. Be careful, it’s hard to eat just one bite of our handcrafted, gluten free Original Kettlecorn. Munch Better.',
    price: 4.49,
    weight: 0.44,
    perishable: false,
    categories: ['snacks', 'gluten-free']
  };
} else {
  product = {
    slug: '',
    name: '',
    description: '',
    price: '',
    weight: '',
    perishable: false,
    categories: []
  };
}
export default {
  name: 'ProductCreatePage',
  data: function() {
    return {
      product: product,
      formHasErrors: false
    };
  },
  //   initializes validators
  validations: {
    product: {
      slug: {
        required,
        minLength: minLength(4),
        // custom function for validation
        doesNotExist(value) {
          // returns true or false
          return !this.$store.getters.getProductBySlug(value);
        }
      },
      name: {
        required
      }
    }
  },
  watch: {
    //   for global errors
    '$v.$anyError': function() {
      this.formHasErrors = this.$v.$anyError;
    }
  },
  methods: {
    handleSubmit: function() {
      //   validate product information from the form
      if (!this.formHasErrors) {
        //   Axios request to the server to persist the new product
        app.axios
          //   post indicates to firebase that we want to change/persist changes to products.json
          .post(app.config.api + 'products.json', this.product)
          .then(response => {
            let key = response.data.name;

            this.$store.commit('addProduct', { [key]: this.product });

            this.$router.push({
              name: 'product',
              params: { slug: this.product.slug }
            });
          });
        //   Update Vuex store with an action or mutation
      }
    }
  }
};
</script>

<style scoped>
#description {
  height: 150px;
}
</style>