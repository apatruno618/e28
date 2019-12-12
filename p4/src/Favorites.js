export default class Favorites {

    // this method automatically gets invoked
    constructor() {
        // Extract JSON bookmark string/value from local storage
        let favorites = localStorage.getItem('favorites');
        // Parse JSON bookmark String to `items` object
        // if there's no bookmark, will default to empty array
        this.items = (favorites) ? JSON.parse(favorites) : [];
    }

    /**
     * Getter method for items, just returns items
     */
    getItems() {
        return this.items;
    }

    /**
     * Returns how many total items are in the cart
     */
    count() {
        let sum = 0;
        for (let key of Object.keys(this.items)) {
            sum += this.items[key].quantity;
        }
        return sum;
    }

    /**
     * Updates bookmark in localstorage
     */
    update() {
        localStorage.setItem('favorites', JSON.stringify(this.items))
    }

    /**
     * Add a new item of the given recipeId
     */
    add(recipeId) {

        // First see if recipe is already present
        let item = this.getItem(recipeId)

        if (!item) {
            this.items.push({
                id: recipeId
            });

        }
        // persists to local storage
        this.update();
    }

    /**
     * Remove an item from items via slug
     */
    remove(id) {
        let item = this.getItem(id);

        let itemIndex = this.items.indexOf(item);

        if (item) {
            this.items.splice(itemIndex, 1);
            this.update();
        }
    }

    /**
     * Get an item from items via recipeId
     * Returns null if recipe does not exist in items
     */
    getItem(recipeId) {
        return this.items.find(({ id }) => id === recipeId) || null;
    }
}