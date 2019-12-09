// /tests/e2e/specs/zipfoods.js

// `describe` is a Cypress method used to group tests
// It takes two arguments:
// 1) The name of the test
// 2) A callback function with tests
describe('ZipFoods', () => {
  it('Visits the homepage', () => {
    cy.visit('/')
    cy.contains('h2', 'Featured Products')
  })

  // Define a product we can use throughout our tests
  let product = {
    name: 'Driscoll’s Strawberries',
    slug: 'driscolls-strawberries',
    id: 1
  }

  // `it` is another Cypress method, and it's used to define individual tests within our groups
  // It takes two arguments:
  // 1) A string explaining what the test should do 
  // 2) A callback function which contains the actual test
  it('shows all the products', () => {

    // https://docs.cypress.io/api/commands/visit.html#Syntax)
    cy.visit('/products')

    cy.contains('h2', 'Products')

    // Confirm we see a specific product
    // https://docs.cypress.io/api/commands/contains.html#Syntax
    cy.contains('[data-test="product-name"]', product.name)

    // Confirm we see all 10 products
    // https://docs.cypress.io/api/commands/get.html#Syntax
    // https://docs.cypress.io/api/commands/should.html#Syntax
    // https://docs.cypress.io/guides/references/assertions.html#Length
    cy.get('[data-test="product-name"]').should('have.length', 10)

    // Confirm we can click on a product and get to its indiviudal page
    // https://docs.cypress.io/api/commands/first.html#Syntax
    // https://docs.cypress.io/api/commands/click.html#Syntax
    cy.get('[data-test="product-name"]').first().click();

    cy.contains('[data-test="product-name"]', product.name)

  })

  it('interacts with cart', () => {
    cy.visit('/product/' + product.id);
    cy.get('[data-test="add-to-cart-button"]').click();
    cy.contains('[data-test="cart-count"]', 1);
    cy.visit('/cart');
    cy.contains('[data-test="cart-contents"]', '1 x ' + product.name);
    cy.get('[data-test="remove-from-cart-button"]').click();
    cy.contains('[data-test="cart-count"]', 0);
    cy.contains('No items');
  })

  it('shows the categories page', () => {
    cy.visit('/categories');
    cy.contains('[data-test="category-name"]', 'baking');
    cy.get('[data-test="category-name"]').should('have.length', 8);
  })
})