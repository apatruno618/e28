import { expect } from 'chai'
// will not mount child components
import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import ShowRecipe from '@/components/ShowRecipe.vue'

describe('ShowRecipe.vue', () => {
  // first parameter describes test
  it('shows a recipe', () => {

    let recipe = {
      slug: "perfect-roast-rurkey",
      name: "Perfect Roast Turkey",
      level: "Intermediate",
      time: "3 hr 20 min",
      yield: "8 servings"
    }
    const wrapper = shallowMount(ShowRecipe, {
      propsData: { recipe },
      stubs: {
        // stubs router-link vue warning
        RouterLink: RouterLinkStub
      }
    })
    // assertions for unit test
    expect(wrapper.text()).to.include(recipe.yield)

    // returns a boolean value if it finds recipe-link in the DOM
    let foundRecipeLink = wrapper.find('[data-test="recipe-link"]').exists()
    expect(foundRecipeLink).to.equal(true)
  })
})
