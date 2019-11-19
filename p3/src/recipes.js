// single source of truth therefore, deleting an item (with Vuetools) from 
// ShowSelected with also remove it from anywhere else that's pulling from this single source of truth
export const recipes = [
    {
        id: 1,
        name: 'Perfect Roast Turkey',
        level: 'Intermediate',
        time: '3 hr 20 min',
        yield: '8 servings',
        special_equipment: null,
        ingredients: [
            '1/4 pound (1 stick) unsalted butter',
            '1 lemon, zested and juiced',
            '1 teaspoon chopped fresh thyme leaves',
            '1 fresh turkey (10 to 12 pounds)',
            'Kosher salt',
            'Freshly ground black pepper',
            '1 large bunch fresh thyme',
            '1 whole lemon, halved',
            '1 Spanish onion, quartered',
            '1 head garlic, halved crosswise'
        ],
        directions: [
            'Preheat the oven to 350 degrees F.',
            'Melt the butter in a small saucepan. Add the zest and juice of the lemon and 1 teaspoon of thyme leaves to the butter mixture. Set aside.',
            'Take the giblets out of the turkey and wash the turkey inside and out. Remove any excess fat and leftover pinfeathers and pat the outside dry. Place the turkey in a large roasting pan. Liberally salt and pepper the inside of the turkey cavity. Stuff the cavity with the bunch of thyme, halved lemon, quartered onion, and the garlic. Brush the outside of the turkey with the butter mixture and sprinkle with salt and pepper. Tie the legs together with string and tuck the wing tips under the body of the turkey.',
            'Roast the turkey about 2 1/2 hours, or until the juices run clear when you cut between the leg and the thigh. Remove the turkey to a cutting board and cover with aluminum foil; let rest for 20 minutes.',
            'Slice the turkey and serve.'
        ],
        categories: ['entree', 'non-vegan']
    },
    {
        id: 2,
        name: 'The Best Sweet Potato Casserole',
        level: 'Easy',
        time: '45 min',
        yield: '6 - 8 servings',
        special_equipment: 'a 2-quart baking dish',
        ingredients: [
            '1/2 stick (4 tablespoons) unsalted butter, melted, plus more for buttering the baking dish',
            '3 to 4 large sweet potatoes (about 1 3/4 pounds), peeled and cubed ',
            '1/2 cup milk', '1/4 cup brown sugar, packed',
            '1 teaspoon pure vanilla extract',
            '1/2 teaspoon kosher salt',
            '2 large eggs',
            '1/2 cup all-purpose flour',
            '1/2 cup brown sugar, packed',
            '1/2 stick (4 tablespoons) unsalted butter, melted',
            '1/4 teaspoon kosher salt',
            '3/4 cup chopped pecans'
        ],
        directions: [
            'For the sweet potatoes: Add 1 3/4 pounds peeled and cubed sweet potatoes to a large pot of salted water. Bring to a boil over high heat, then lower the heat to a simmer and cook until the potatoes are very tender, 15 to 20 minutes. Drain and cool. Mash the sweet potatoes.',
            'For the filling: Preheat the oven to 350 degrees F. Butter a 2-quart baking dish.',
            'Whisk together the butter, mashed sweet potatoes, milk, brown sugar, vanilla, salt and eggs in a large bowl. Transfer to the prepared baking dish.',
            'For the topping: Combine the flour, brown sugar, butter and salt in a medium bowl until moist and the mixture clumps together. Stir in the pecans. Spread the mixture over the top of the sweet potatoes in an even layer. Bake until mostly set in the center and golden on top, 25 to 30 minutes. Serve hot.'
        ],
        categories: ['side dish', 'non-vegan']
    },
    {
        id: 3,
        name: 'Balsamic-Roasted Brussels Sprouts',
        level: 'Easy',
        time: '30 min',
        yield: '4 - 6 servings',
        special_equipment: null,
        ingredients: [
            '1 1/2 pounds Brussels sprouts, trimmed and cut in half through the core',
            '4 ounces pancetta, 1/4-inch-diced',
            '1/4 cup good olive oil',
            'Kosher salt and freshly ground black pepper',
            '1 tablespoon syrupy balsamic vinegar'
        ],
        directions: [
            'Preheat the oven to 400 degrees.',
            'Place the Brussels sprouts on a sheet pan, including some of the loose leaves, which get crispy when they\'re roasted.',
            'Add the pancetta, olive oil, 1 1 / 2 teaspoons salt, and 1 / 2 teaspoon pepper, toss with your hands, and spread out in a single layer.',
            'Roast the Brussels sprouts for 20 to 30 minutes, until they\'re tender and nicely browned and the pancetta is cooked.',
            'Toss once during roasting.',
            'Remove from the oven, drizzle immediately with the balsamic vinegar, and toss again.',
            'Taste for seasonings, and serve hot.',
        ],
        categories: ['side dish', 'non-vegan']
    },
    {
        id: 4,
        name: 'Butternut Squash Soup',
        level: 'Intermediate',
        time: '1 hr',
        yield: '6 servings',
        special_equipment: null,
        ingredients: [
            'One 2- to 3-pound butternut squash, peeled and seeded',
            '2 tablespoons unsalted butter',
            '1 medium onion, chopped',
            '6 cups chicken stock',
            'Nutmeg',
            'Salt and freshly ground black pepper'
        ],
        directions: [
            'Cut squash into 1-inch chunks.',
            'In large pot melt butter.',
            'Add onion and cook until translucent, about 8 minutes.',
            'Add squash and stock.',
            'Bring to a simmer and cook until squash is tender, about 15 to 20 minutes.',
            'Remove squash chunks with slotted spoon and place in a blender and puree.',
            'Return blended squash to pot.',
            'Stir and season with nutmeg, salt, and pepper.',
            'Serve.'
        ],
        categories: ['appetizer', 'non-vegan']
    },
    {
        id: 5,
        name: 'Roasted Butternut Squash Salad with Warm Cider Vinaigrette',
        level: 'Easy',
        time: '43 min',
        yield: '4 servings',
        special_equipment: null,
        ingredients: [
            '1 (1 1/2-pound) butternut squash, peeled and 3/4-inch) diced',
            'Good olive oil',
            '1 tablespoon pure maple syrup',
            'Kosher salt and freshly ground black pepper',
            '3 tablespoons dried cranberries',
            '3/4 cup apple cider or apple juice',
            '2 tablespoons cider vinegar',
            '2 tablespoons minced shallots',
            '2 teaspoons Dijon mustard',
            '4 ounces baby arugula, washed and spun dry',
            '1/2 cup walnuts halves, toasted',
            '3/4 cup freshly grated Parmesan'
        ],
        directions: [
            'Preheat the oven to 400 degrees F.',
            'Place the butternut squash on a sheet pan. Add 2 tablespoons olive oil, the maple syrup, 1 teaspoon salt and 1/2 teaspoon pepper and toss. Roast the squash for 15 to 20 minutes, turning once, until tender. Add the cranberries to the pan for the last 5 minutes.',
            'While the squash is roasting, combine the apple cider, vinegar, and shallots in a small saucepan and bring to a boil over medium-high heat. Cook for 6 to 8 minutes, until the cider is reduced to about 1/4 cup. Off the heat, whisk in the mustard, 1/2 cup olive oil, 1 teaspoon salt, and 1/2 teaspoon of pepper.',
            'Place the arugula in a large salad bowl and add the roasted squash mixture, the walnuts, and the grated Parmesan. Spoon just enough vinaigrette over the salad to moisten and toss well. Sprinkle with salt and pepper and serve immediately.'
        ],
        categories: ['side dish', 'non-vegan']
    },
    {
        id: 6,
        name: 'Good Eats Roast Turkey',
        level: 'Easy',
        time: '9 hr 45 min',
        yield: '10 - 12 servings',
        special_equipment: null,
        ingredients: [
            '1 (14 to 16 pound) frozen young turkey',
            '1 cup kosher salt',
            '1/2 cup light brown sugar',
            '1 gallon vegetable stock',
            '1 tablespoon black peppercorns',
            '1 1/2 teaspoons allspice berries',
            '1 1/2 teaspoons chopped candied ginger',
            '1 gallon heavily iced water',
            '1 red apple, sliced',
            '1/2 onion, sliced',
            '1 cinnamon stick',
            '1 cup water',
            '4 sprigs rosemary',
            '6 leaves sage',
            'Canola oil'
        ],
        directions: [
            '2 to 3 days before roasting: ',
            'Begin thawing the turkey in the refrigerator or in a cooler kept at 38 degrees F. ',
            'Combine the vegetable stock, salt, brown sugar, peppercorns, allspice berries, and candied ginger in a large stockpot over medium-high heat. Stir occasionally to dissolve solids and bring to a boil. Then remove the brine from the heat, cool to room temperature, and refrigerate. ',
            'Early on the day or the night before you\'d like to eat: ',
            'Combine the brine, water and ice in the 5-gallon bucket. Place the thawed turkey (with innards removed) breast side down in brine. If necessary, weigh down the bird to ensure it is fully immersed, cover, and refrigerate or set in cool area for 8 to 16 hours, turning the bird once half way through brining.',
            'Preheat the oven to 500 degrees F. Remove the bird from brine and rinse inside and out with cold water. Discard the brine. ',
            'Place the bird on roasting rack inside a half sheet pan and pat dry with paper towels. ',
            'Combine the apple, onion, cinnamon stick, and 1 cup of water in a microwave safe dish and microwave on high for 5 minutes. Add steeped aromatics to the turkey\'s cavity along with the rosemary and sage.Tuck the wings underneath the bird and coat the skin liberally with canola oil. ',
            'Roast the turkey on lowest level of the oven at 500 degrees F for 30 minutes. Insert a probe thermometer into thickest part of the breast and reduce the oven temperature to 350 degrees F. Set the thermometer alarm (if available) to 161 degrees F. A 14 to 16 pound bird should require a total of 2 to 2 1/2 hours of roasting. Let the turkey rest, loosely covered with foil or a large mixing bowl for 15 minutes before carving.'
        ],
        categories: ['entree', 'non-vegan']
    },
    {
        id: 7,
        name: 'Pumpkin Gingersnap Cheesecake with Salted Caramel Sauce',
        level: 'Intermediate',
        time: '6 hr 45 min',
        yield: '10 - 12 servings',
        special_equipment: null,
        ingredients: [
            '12 ounces gingersnaps',
            '1/2 cup pecans, finely chopped',
            '6 tablespoons salted butter, melted',
            '2 tablespoons packed brown sugar ',
            'Dash of kosher salt ',
            'Three 8-ounce packages cream cheese, softened',
            'One 15-ounce can pumpkin puree',
            '3 large eggs, at room temperature ',
            '1/4 cup sour cream, at room temperature ',
            '1 1/2 cups granulated sugar ',
            '1 teaspoon ground cinnamon ',
            '1 teaspoon vanilla extract',
            '1/2 teaspoon ground nutmeg ',
            '1 cup packed brown sugar',
            '1/2 cup heavy cream ',
            '4 tablespoons (1/2 stick) salted butter',
            '1 teaspoon vanilla extract ',
            '1 teaspoon kosher salt',
            'Whipped cream, for serving',
            'Chopped pecans, for serving'
        ],
        directions: [
            'For the pumpkin gingersnap cheesecake: In a food processor or blender, grind the gingersnaps until fine. Pour into a bowl and stir in the pecans, melted butter, brown sugar and salt. Press into the bottom and sides of a 10-inch springform pan and refrigerate for 30 minutes.',
            'Preheat the oven to 350 degrees F.',
            'To make the filling, beat the cream cheese in a stand mixer until soft, scraping the sides once. Mix in the pumpkin, scraping the sides once or twice. Add the eggs 1 at a time, allowing them to mix in, then add the sour cream and mix. With the mixer on low, add the granulated sugar, cinnamon, vanilla and nutmeg. Thoroughly scrape the bowl and mix to ensure everything is smooth and mixed in.',
            'Pour the filling into the pan, smoothing the top. Set the pan on a baking sheet and bake until the filling is no longer soupy but still slightly jiggly, about 50 minutes. Turn off the oven, open the door just a hair and let the cheesecake sit in the oven for 15 more minutes. Remove from the oven and allow it to cool for 30 minutes, then cover it with plastic wrap and put it in the fridge to chill for at least 4 hours or overnight.',
            'For the salted caramel sauce: Mix the brown sugar, heavy cream, butter, vanilla and salt in a medium saucepan over medium-low to medium heat. Cook, while whisking gently, until thickened, 5 to 7 minutes. Let cool, then refrigerate until needed. Serve warm or at room temperature.',
            'Slice the cheesecake and top with the salted caramel sauce, whipped cream and chopped pecans.'
        ],
        categories: ['dessert', 'non-vegan']
    },
    {
        id: 8,
        name: 'Perfect Cranberry Sauce',
        level: 'Easy',
        time: '37 min',
        yield: '8 - 10 servings',
        special_equipment: null,
        ingredients: [
            '12 - ounce bag of fresh or frozen cranberries',
            '1 cup sugar',
            '1 strip orange or lemon zest',
            'pinch of salt',
            'pinch of pepper'
        ],
        directions: [
            'Empty cranberries into a saucepan and transfer 1 / 2 cup to a small bowl.',
            'Add sugar, orange (or lemon) zest and 2 tablespoons water to the pan and cook over low heat, stirring occasionally, until the sugar dissolves and the cranberries are soft, about 10 minutes.',
            'Increase the heat to medium and cook until the cranberries burst, about 12 minutes.',
            'Reduce the heat to low and stir in the reserved cranberries.',
            'Add sugar, salt and pepper to taste and cool to room temperature before serving.',
        ],
        categories: ['side dish', 'vegan']
    },
    {
        id: 9,
        name: 'Mashed Potatoes',
        level: 'Easy',
        time: '35 min',
        yield: '6 - 8 servings',
        special_equipment: null,
        ingredients: [
            '4 pounds golden creamer potatoes, peeled and cut into quarters',
            '1 bay leaf',
            'Kosher salt and freshly ground black pepper',
            '2 cups heavy cream',
            '3 tablespoons unsalted butter',
            '2 tablespoons chopped chives'
        ],
        directions: [
            'Put the potatoes into a large pot, add the bay leaf, 2 tablespoons salt, and cover with cold water. ',
            'Bring to a boil over medium-high heat and cook until the potatoes are tender, about 20 minutes. ',
            'Drain them well and remove the bay leaf. ',
            'Meanwhile, heat the cream and butter in a small saucepan. ',
            'Put the potatoes through a ricer or food mill into a bowl. ',
            'Add the hot cream and season with salt and pepper. ',
            'Mix together with a spoon and add the chives.'
        ],
        categories: ['side dish', 'non-vegan']
    },
    {
        id: 10,
        name: 'Wild Mushroom Gravy',
        level: 'Easy',
        time: '35 min ',
        yield: '8 servings',
        special_equipment: null,
        ingredients: [
            '1 tbsp. olive oil',
            '1/2 c. chopped onion',
            '1 tsp. dried thyme',
            '1/4 tsp. salt',
            '8 oz. oyster mushrooms, sliced',
            '1/4 c. dry sherry',
            '3 c. mushroom stock or vegetable broth',
            '1 1/2 tbsp. all-purpose flour',
            '2 tbsp. water',
            '2 tbsp. butter (or Earth Balance)',
            '1/8 tsp. black pepper'
        ],
        directions: [
            'Heat oil in skillet over medium-high heat. Add onion and saute 1 minute. Add thyme, salt, and mushrooms and saute about 8 minutes, or until mushrooms are browned. Add sherry and cook until liquid evaporates. Stir in broth. Bring to a boil and cook until gravy is reduced to about 2 cups (about 14 minutes).',
            'Whisk together flour and water in a small bowl. Add mixture to skillet; return to boil. Reduce heat to low and simmer until slightly thickened, about 2 minutes. Remove from heat; stir in butter 1 tablespoon at a time and pepper.'
        ],
        categories: ['side dish', 'vegan']
    },
    {
        id: 11,
        name: 'NO-BAKE PUMPKIN TARTS',
        level: 'Intermediate',
        time: '20 min',
        yield: '8 servings',
        special_equipment: null,
        ingredients: [
            '1 cup walnuts',
            '1/4 cup shredded coconut',
            '2 tablespoons maple syrup',
            '1 tablespoon coconut oil , melted',
            '1/4 teaspoon salt',
            '1 cup pumpkin puree',
            '1/4 cup almond milk',
            '1/4 cup coconut oil , melted',
            '3/4 cup Medjool dates , pitted',
            '1 teaspoon vanilla',
            '1 teaspoon cinnamon',
            '1/4 teaspoon ground ginger',
            '1/8 teaspoon ground cloves'
        ],
        directions: [
            'Line a standard muffin tin with 8 parchment cups, and set aside.',
            'To prepare the crust, pulse the walnuts and shredded coconut in a small food processor until ground into a fine meal. (Be careful not to over-process, or you\'ll wind up with nut butter instead!) Add the maple syrup, coconut oil and salt and process again until just mixed, and the dough sticks together when pinched between your fingers.Scoop the dough by heaping tablespoons into the 8 parchment cups and use your fingers to press down and form a crust for each cup.Place the pan in the fridge to set while you prepare the filling.',
            'To prepare the filling, simply combine all of the ingredients in a blender, and blend until completely smooth and creamy. (If your dates aren\'t soft enough to blend easily, soak them in warm water for 10 minutes beforehand.) Remove the pan of crusts from the fridge, and pour the batter evenly into the 8 cups.Smooth the top, then return to the fridge to set completely, about 4-6 hours.',
            'When the center of the filling is firm to the touch, the tarts are ready to serve!'
        ],
        categories: ['dessert', 'vegan']
    },
    {
        id: 12,
        name: 'TOFURKY ROAST',
        level: 'Intermediate',
        time: '1 hr 30 min',
        yield: '5 servings',
        special_equipment: 'tin foil and pie plate/roast pan',
        ingredients: [
            'Tofurky Roast, thawed in fridge for at least 24 hours',
            '1 medium - large sweet potato, scrubbed',
            '2 carrots',
            '8–10 fingerling potatoes',
            '2 tbsp soy sauce',
            '2 tbsp olive oil',
            '1/2 tsp thyme',
            '1/2 tsp oregano',
            '1/2 tsp rosemary'
        ],
        directions: [
            'Preheat your oven to 350 F.',
            'Run your Tofurky Roast under hot water to loosen to plastic casing. Use a knife to carefully remove the plastic.',
            'Peel and chop your carrots and sweet potatoes into large uniform pieces. Keep the pieces nice and large, they’re going to cook for a while.',
            'In a small bowl, mix together soy sauce, olive oil, thyme, oregano, and rosemary.',
            'In a pie plate or roast pan, place your Tofurky Roast in the center and arrange your carrots, sweet potatoes, and fingerlings around the outside.',
            'Pour about half of the the soy sauce, oil, and herb mixture mixture over the roast, and vegetables.',
            'Use tin foil to tightly cover the entire pie plate.',
            'Place on the middle rack of your preheated oven. Cook for 1 hour. Remove tin foil, baste with remaining soy sauce, oil, and herb mixture and return to oven to bake uncovered for an additional 10-15 minutes.',
            'For optimal flavour and texture, use a bread knife (or other sharp, serrated knife) and slice it (shaving it would be a better word) as thin as you can. Serve with Mushroom Gravy and Cranberry Sauce.'
        ],
        categories: ['entree', 'vegan']
    },
    {
        id: 13,
        name: 'Lentil & Sweet Potato Shepherd’s Pie',
        level: 'Easy',
        time: '1 hr',
        yield: '6 servings',
        special_equipment: null,
        ingredients: [
            '4 medium sweet potatoes',
            '1/2 cup diced onions',
            '1/2 cup diced celery',
            '1/2 cup diced carrots',
            '4 1/2 cups prepared lentils',
            '2 15 oz cans diced tomatoes',
            '2 tablespoons soy sauce',
            '1 tablespoon basil + more for garnish',
            '1/2 cup chopped spinach',
            '2+ tablespoons non-dairy milk',
            'Sea salt'
        ],
        directions: [
            'Before anything else, peel and chop the sweet potatoes into small chunks. Get them in a pot of water and let them boil for at least 15-20 minutes, depending on size.',
            'Meanwhile, chop the carrots, onion, and celery (mirepoix) into small chunks. To make things super easy, I often buy a pre-cut mirepoix at Trader Joe’s. Or you can use a food processor. Add this to a large skillet over medium heat with a tablespoon of water and allow them to soften.',
            'Once the veggies are softened, add the prepared lentils to the pan. You can use any kind of lentils you’d like… dried (cook them yourself), canned (drained), or pre-made lentils in a package (as long as the don’t have any unnatural ingredients). Allow these to cook for several minutes with the mirepoix.',
            'Preheat the oven to 350º F',
            'Open the cans of diced tomatoes (but do not drain them) and add these along with a tablespoon of chopped (or dried) basil leaves, a handful of chopped spinach, and a splash of soy sauce. Let this filling simmer for 10-15 minutes for the flavors to mingle.',
            'When the sweet potatoes are soft all the way through, remove them from the heat and drain the water. Mash with a little salt and a splash of non-dairy milk until the consistency is perfect.',
            'Add the lentil filling to a 9 x 13 pan and top with a layer of sweet potatoes. Or, like pictured, you can add to individual oven-safe bowls. Bake in the oven for about 20 minutes until the topping becomes slightly browned. Allow to cool before serving.'
        ],
        categories: ['entree', 'vegan']
    }
]