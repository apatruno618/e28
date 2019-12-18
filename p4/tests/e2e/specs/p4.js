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
    cy.visit('/create');

  })

})
