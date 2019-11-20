export default class Favorites {

    /**
     * 
     */
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
     * Get an item from items via recipeId
     * Returns null if recipe does not exist in items
     */
    getItem(recipeId) {
        return this.items.find(({ id }) => id === recipeId) || null;
    }
}