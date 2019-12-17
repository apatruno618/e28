
import Vue from 'vue';

Vue.filter('recipeImage', function (slug) {
    try {
        // tries to load recipe image
        return require('./assets/images/recipes/' + slug + '.jpg');
    } catch (e) {
        // if image isn't there, will render the image-not-available.jpg
        return require('./assets/images/image-not-available.jpg');
    }
})