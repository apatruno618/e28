// /src/Cart.js
export default class Cart {

    /**
     * 
     */
    // this method automatically gets invoked
    constructor() {
        // Extract JSON cart string/value from local storage
        let cart = localStorage.getItem('cart');

        // Parse JSON cart String to `items` object
        // if there's no cart, will default to empty array
        this.items = (cart) ? JSON.parse(cart) : [];
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
     * Updates cart in localstorage
     */
    update() {
        localStorage.setItem('cart', JSON.stringify(this.items))
    }

    /**
     * Add a new item of the given productSlug
     */
    // quantity is defaulted to 1
    add(slug, quantity = 1) {

        // First see if product is already present
        let item = this.getItem(slug)

        if (item) {
            // Product is in cart already; increment quantity by 1
            item.quantity += quantity;

        } else {
            // Product not in cart, add as new item
            this.items.push({
                slug: slug,
                quantity: quantity
            });
        }
        // persists to local storage
        this.update();
    }

    /**
     * Remove an item from items via productSlug
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
     * Get an item from items via slug
     * Returns null if product does not exist in items
     */
    getItem(productSlug) {
        return this.items.find(({ slug }) => slug === productSlug) || null;
    }
}

