## P3 Peer Review

+ Reviewer's name: Anna Patruno
+ Reviwee's name: Gerald Walden
+ URL to reviewee's Github repo: *<https://github.com/bibliodrone/e28>*

### Are you able to produce any errors or unexpected results?

+ I was not able to produce any errors.
+ All features work as expected.
+ The application is very intuitive and easy to navigate. 

### Were there any parts of the interface that you found confusing or unclear?

+ Although the `<title>` of the page is `myblog` having that also reflected in a header or tagline would have made the application's purpose even more clearer.


### Are there aspects of the code that you feel were not self-evident and would benefit from comments?

+ The `methods` in `/BlogPage.vue` would benefit from comments but in general, the code is sufficiently commented.

### Are there any parts of the code that you found interesting or taught you something new?

+ The existence and use of `!important`{:.language-css} in `/BlogCategories.vue` is new to me. After reading up on what it does I've learned it has some pretty serious styling consequences!

### Are there any best practices discussed in course material that you feel were not addressed in the code?

+ Yes, there were several best practices discussed in the course material that were not addressed in the code.
    1. One of best practices discussed and demonstrated in the course material that was not addressed in this code is in regard to code organization/structure and naming of components. In this case, the parent and child components are all saved within the same directory instead of being separated into their own `pages` directory. Likewise, the parent components that actually reflect a page are not consistently named as such. For example, the `BlogPosts.vue`, which is listed as `'homepage'` in `/main.js` could be renamed to `HomePage.vue` or `BlogHome.vue`.
    2. There is no `/app.js` to act as the global include/config/state manager. The API link and axios should be refactored into this file by using: 
```js
        export const config = {
            api: 'https://my-json-server.typicode.com/bibliodrone/e28-p3-api/posts'
        }
        export const axios = require('axios');
```
    3. `/Favorites.js` should be in `/src/` instead of `/src/components/` as it is not a component.

### Do you have any additional comments not covered in the above questions?

+ I noticed some commented out code that could have been removed prior to committing to github. For example, `// import ByCategory from './components/ByCategory.vue'` in `/main.js` and 
```html
        <!-- To do: find some image assets to illustrate posts.
        <img
        v-if='post.id'
        class='blog-image'
        :alt='"Image accompanying  " + post.title'
        :src='"../assets/images/post/" + post.id + ".jpg"' -->
```
in `/BlogPage.vue`.
+ I also noticed some uncommented code that I think was mistakinly left. For example `<hr>` in `/BlogPost.vue`.
+ The font size of the list of categories on the interface could be improved to be more in line with the rest of the application. 
+ Overall easy to navigate interface, but the code could be improved and aligned with the best practices taught in lecture and notes.