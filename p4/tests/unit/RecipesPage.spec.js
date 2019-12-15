import { expect } from 'chai'
// will mount child components
import { mount, RouterLinkStub } from '@vue/test-utils'
import RecipesPage from '@/components/pages/RecipesPage.vue'

describe('RecipesPage.vue', () => {

    let recipe = {
        slug: "butternut-squash-soup",
        name: "Butternut Squash Soup",
        level: "Intermediate",
        time: "1 hr",
        yield: "6 servings"
    }

    it('shows all recipes', () => {
        const wrapper = mount(RecipesPage, {
            // overrides computed property in component
            // because we don't want to test vuex store
            computed: {
                recipes: function () {
                    return [recipe]
                }
            },
            stubs: {
                RouterLink: RouterLinkStub
            }
        })

        expect(wrapper.text()).to.include('Recipes');
        expect(wrapper.text()).to.include('Butternut Squash Soup');
    })
})
