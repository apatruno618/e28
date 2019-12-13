// https://docs.cypress.io/api/introduction/api.html

describe('TurkeyTable', () => {
  it('Visits the homepage', () => {
    cy.visit('/')
    cy.contains('h2', 'recipes')
  })

  it('shows all recipes', () => {
    cy.visit('/recipes')
    cy.contains('[data-test="recipe-name"]', 'Butternut Squash Soup')

    // counts the number of recipes
    cy.get('[data-test="recipe-name"]').should('have.length', 5)

    // goes to recipe page
    cy.get('[data-test="recipe-name"]').first().click()

    // confirms recipe page is showing the recipe
    cy.contains('[data-test="recipe-name"]', 'Perfect Roast Turkey')
  })

  it('adds and removes from favorites', () => {
    // Add to cart from first recipe page
    cy.visit('/recipe/' + 1);
    cy.get('[data-test="add-to-favorites-button"]').click();

    // Confirm favorites shows recipe
    cy.visit('/favorites');
    cy.contains('[data-test="favorites-contents"]', 'Perfect Roast Turkey');

    // Remove from favorites 
    cy.get('[data-test="remove-from-favorites-button"]').click();
    // cy.contains('[data-test="favorites-count"]', 0);
    cy.contains('No items');
  })

})
