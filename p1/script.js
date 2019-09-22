// initializes vue instance
let app = new Vue({
    el: '#app',
    data: {
        'playerChoice': null,
        'shapes': ['rock', 'paper', 'scissors'],
        'computerChoice': null,
    },
    methods: {
        pickShape: function () {
            var chosenNumber = Math.floor(Math.random() * this.shapes.length);
            this.computerChoice = this.shapes[chosenNumber];
        }
    }
})
