// be sure to place component before root Vue instance otherwise instance wouldn't have access to components
// components have to be multi-word to prevent from ever having a conflict with an existing html element
// can use camel case, Vue will translate to the form html needs with hyphen aka kebab style
Vue.component('roundDetail', {
    // return the data as a function to allow for multiple round-details in .html
    data: function () {
        return {
            deleted: false,
        }
    },
    template: '#round-detail',
    methods: {
        deleteRound: function () {
            this.deleted = true;
        }
    }
})
// root Vue instance
let app = new Vue({
    el: '#app',
    data: {
        submitted: false,
        playerChoice: null,
        computerChoice: null,
        shapes: ['rock', 'paper', 'scissors'],
        result: false,
        tie: false,
        playerWin: false,
        computerWin: false,
        imageSrc: '',
        imageAlt: '',
    },
    methods: {
        retry: function () {
            this.playerChoice = null;
            this.submitted = false;
            this.result = false;
            this.computerChoice = null;
        },
        pickShape: function () {
            this.submitted = true;
            var chosenNumber = Math.floor(Math.random() * this.shapes.length);
            this.computerChoice = this.shapes[chosenNumber];
            if (this.computerChoice == 'rock') {
                this.imageSrc = 'rock.jpg';
                this.imageAlt = 'rock hand gesture';
            } else if (this.computerChoice == 'paper') {
                this.imageSrc = 'paper.jpg';
                this.imageAlt = 'paper hand gesture';
            } else {
                this.imageSrc = 'scissors.jpg';
                this.imageAlt = 'scissors hand gesture';
            }
            this.loadGame();
        },
        loadGame: function () {
            this.result = true;
            if (this.computerChoice == this.playerChoice) {
                this.tieGame();
            }
            else if (this.computerChoice == "rock") {
                if (this.playerChoice == "paper") {
                    this.playerWon();
                }
                else {
                    this.computerWon();
                }
            } else if (this.computerChoice == "paper") {
                if (this.playerChoice == "scissors") {
                    this.playerWon();
                }
                else {
                    this.computerWon();
                }
            } else if (this.computerChoice == "scissors") {
                if (this.playerChoice == "rock") {
                    this.playerWon();
                }
                else {
                    this.computerWon();
                }
            }
        },
        tieGame: function () {
            this.tie = true;
            this.playerWin = false;
            this.computerWin = false;
        },
        playerWon: function () {
            this.tie = false;
            this.playerWin = true;
            this.computerWin = false;
        },
        computerWon: function () {
            this.tie = false;
            this.playerWin = false;
            this.computerWin = true;
        }
    }
})
