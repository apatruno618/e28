export { default as Cart } from './Cart';

// import of axios
export const axios = require('axios');

export const config = {
    api: 'https://my-json-server.typicode.com/apatruno618/e28-zipfoods-api/',
}

// for global state
export let store = {
    cartCount: 0
}