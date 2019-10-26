// be sure to place component before root Vue instance otherwise the instance won't have access to components
// components have to be multi-word to prevent from ever having a conflict with an existing html element
// can use camel or pascal case, Vue will translate to the form html needs with hyphen aka kebab style
Vue.component('roundDetail', {
    // returns the data as a function to allow for multiple round-details in .html
    data: function () {
        return {
            
        }
    },
    // the details we want to display in component
    // use an object to specify data type and default value for the property
    props: {
        'number': {
            type: Number,
            default: 0
        },
        'winner': {
            type: String,
            default: ''
        }
    },
    // pass a string for what we want the component to be
    template: '#round-detail'
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
        rounds: [],
        round: 1
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
            } this.rounds.push({
                number: this.round++,
                winner: 'player'
            })
        },
        deleteRound: function (roundNumber) {
            console.log('Invoked deleteRound from root Vue instance')
            function isMatchingRound(round) {
                return round.number != this;
            }
            this.rounds = this.rounds.filter(isMatchingRound, roundNumber);
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
