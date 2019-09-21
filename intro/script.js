// first thing you do
// initialize vue instance and store in a variable
let app = new Vue({
    // add customizations and behaviors, pass series of options to new vue instance
    // use element option which tells you what element on the page to attach vue instance to
    // prefix with # bc using id, for classes use period
    el: '#app',
    // typically what you see next is data, we're going to pass it an object
    data: {
        'playerName': null,
        'guess': null,
        'guesses': []
    }
});