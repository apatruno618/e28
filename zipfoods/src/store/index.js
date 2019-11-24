import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartCount: 0,
        products: [],
    },
    // methods that will manipulate state
    mutations: {
        updateCartCount(state, payload) {
            state.cartCount += payload;
        }
    }
})