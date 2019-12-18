// https://docs.cypress.io/api/introduction/api.html

describe('TurkeyTable', () => {
  it('Visits the homepage', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome!')

    // confirms side dish recipes contains wild mushroom gravy
    cy.contains('[data-test="recipe-selected-category"]', 'Wild Mushroom Gravy')
  })

  it('shows all categories', () => {
    cy.visit('/categories')
    cy.get('[data-test="recipe-categories"]').should('have.length', 6)
  })

  it('shows all recipes', () => {
    cy.visit('/recipes')
    cy.contains('[data-test="recipe-name"]', 'Butternut Squash Soup')

    // counts the number of recipes
    cy.get('[data-test="recipe-name"]').should('have.length', 13)

    // goes to recipe page
    cy.get('[data-test="recipe-name"]').last().click()

    // confirms recipe page is showing the recipe
    cy.contains('[data-test="recipe-name"]', 'Mashed Potatoes')
  })

  it('adds and removes from favorites', () => {
    // Add to cart from first recipe page
    cy.visit('/recipe/' + 'mashed-potatoes');
    cy.get('[data-test="add-to-favorites-button"]').click();

    // Confirm favorites shows recipe
    cy.visit('/favorites');
    cy.contains('[data-test="favorites-contents"]', 'Mashed Potatoes');

    // Remove from favorites 
    cy.get('[data-test="remove-from-favorites-button"]').click();
    // cy.contains('[data-test="favorites-count"]', 0);
    cy.contains('No items');
  })

  it('creates and submits a new recipes', () => {
    let recipe = {
      slug: 'annas-baked-ziti',
      name: 'Anna\'s Baked Ziti',
      level: 'easy',
      time: '1hr 30 min',
      yield: '10 servings',
      special_equipment: 'baking dish',
      ingredients: 'ziti pasta, tomato sauce, mozzarella cheese',
      directions:
        'Make the sauce. Make the pasta. Mix the pasta and sauce and bake.'
      ,
      categories: 'entree,non-vegan'
    }

    cy.visit('/recipe/create');
    cy.get('[data-test="recipe-slug-input"]').type(recipe.slug);
    cy.get('[data-test="recipe-name-input"]').type(recipe.name);
    cy.get('[data-test="recipe-level-input"]').select(recipe.level);
    cy.get('[data-test="recipe-time-input"]').type(recipe.time);
    cy.get('[data-test="recipe-yield-input"]').type(recipe.yield);
    cy.get('[data-test="recipe-special-equipment-input"]').type(recipe.special_equipment);
    cy.get('[data-test="recipe-ingredients-input"]').type(recipe.ingredients);
    cy.get('[data-test="recipe-directions-textarea"]').type(recipe.directions);
    cy.get('[data-test="recipe-categories-input"]').type(recipe.categories);
    cy.get('[data-test="add-recipe-button"]').click();
    cy.url().should('include', recipe.slug)
  })

})
