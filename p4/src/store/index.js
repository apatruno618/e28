// contains store object
import Vue from 'vue'
import Vuex from 'vuex'

import * as app from './../app.js';

Vue.use(Vuex)

export default new Vuex.Store({
    // equivalent to data property in vue instance
    state: {
        favoritesCount: 0,
        recipes: []
    },
    // synchronous requests
    mutations: {
        // pass in default state and then its payload
        setFavoritesCount(state, payload) {
            state.favoritesCount = payload;
        },
        updateFavoritesCount(state, payload) {
            state.favoritesCount += payload
        },
        setRecipes(state, payload) {
            state.recipes = payload;
        }
    },
    // requests to server are asynchronous so they should go into actions
    actions: {
        setRecipes(context) {
            // where the axios call is made
            app.axios
                .get(app.config.api)
                .then(response => {
                    context.commit('setRecipes', response.data);
                });
        }
    },
    // retrieves state in a filtered way
    getters: {
        // number of arguments we will pass varies so will return a method for the input
        getRecipeBySlug(state) {
            // this is where we can pass multiple arguments
            return function (slug) {
                return _.find(state.recipes, { 'slug': slug })
                // return state.recipes.find(recipe => recipe.slug == slug)
            }
        }
    }
})
