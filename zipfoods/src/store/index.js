import Vue from 'vue'
// import vuex module
import Vuex from 'vuex'
import * as app from './../app.js';

// make the vuex module available as a plugin
Vue.use(Vuex)

// new vuex store instance
export default new Vuex.Store({
    state: {
        // initialized with default values
        cartCount: 0,
        products: null,
    },
    // methods that will manipulate state
    // should always be synchronous
    mutations: {
        // used to initialize cartCount
        setCartCount(state, payload) {
            state.cartCount = payload;
        },
        // first argument is state
        // 2nd argument is the payload
        updateCartCount(state, payload) {
            state.cartCount += payload;
        },
        setProducts(state, payload) {
            state.products = payload;
        },
        addProduct(state, payload) {
            _.merge(state.products, payload)
        }
    },
    // where we'll set the initial state of products
    // for things that need to happen in an asynchronous fashion
    actions: {
        // context gives us access to methods and props of store instance
        setProducts(context) {
            // where we actually make the axios call
            app.axios
                .get(app.config.api + 'products.json')
                // splice(1) gets rid of the null at the 0th position in products.json
                .then(response => (context.commit('setProducts', response.data)));
        }
    },
    getters: {
        getProductBySlug(state) {
            // will return a method to retrieve input that the getter method needs
            return function (slug) {
                // applying array filtering
                // return state.products.find(product => product.slug == slug);
                return _.find(state.products, { 'slug': slug })
            }
        }
    }
})