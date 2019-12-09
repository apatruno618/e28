// expect is a style of making assertions
import { expect } from 'chai'
// pulling in shallowMount module from test-utils library
// mounts component itself, not its child components
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import ShowProduct from '@/components/ShowProduct.vue'

// describe method comes from mocha
// allows us to group our tests
describe('ShowProduct.vue', () => {
  // it takes 2 params and encapsulates our test
  // describe what component should do
  it('shows a product', () => {
    let product = {
      id: 1,
      name: 'Driscoll’s Strawberries',
      description:
        'Driscoll’s Strawberries are consistently the best, sweetest, juiciest strawberries available. This size is the best selling, as it is both convenient for completing a cherished family recipes and for preparing a quick snack straight from the fridge.',
      price: 4.99,
      available: 0,
      weight: 1,
      perishable: true,
      categories: ['produce', 'fruits']
    }
    // mount component
    const wrapper = shallowMount(ShowProduct, {
      propsData: { product },
      // because ShowProduct has a RouterLink child component
      stubs: {
        RouterLink: RouterLinkStub
      }
    })
    expect(wrapper.text()).to.include(product.name)

    // returns a boolean value if specified attribute, data-test='product-link', exists
    let foundProductLink = wrapper.find('[data-test="product-link"]').exists();
    expect(foundProductLink).to.equal(true);
  })
})
