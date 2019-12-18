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
     * Returns how many total items are in favorites
     */
    count() {
        let sum = this.items.length;
        return sum;
    }

    /**
     * Updates bookmark in localstorage
     */
    update() {
        localStorage.setItem('favorites', JSON.stringify(this.items))
    }

    /**
     * Add a new item of the given recipeSlug
     */
    add(recipeSlug) {

        // First see if recipe is already present
        let item = this.getItem(recipeSlug)

        if (!item) {
            this.items.push({
                slug: recipeSlug
            });

        }
        // persists to local storage
        this.update();
    }

    /**
     * Remove an item from items via slug
     */
    remove(slug) {
        let item = this.getItem(slug);

        let itemIndex = this.items.indexOf(item);

        if (item) {
            this.items.splice(itemIndex, 1);
            this.update();
        }
    }

    /**
     * Get an item from items via recipeSlug
     * Returns null if recipe does not exist in items
     */
    getItem(recipeSlug) {
        // items in favorites are an array so we can still use find
        return this.items.find(({ slug }) => slug === recipeSlug) || null;
    }
}