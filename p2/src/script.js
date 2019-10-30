import Vue from 'vue';
import GameSummary from './components/GameSummary.vue';

// root Vue instance
let app = new Vue({
    el: '#app',
    components: {
        'game-summary': GameSummary
    },
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
        games: [],
        round: 1,
        players: ['Player', 'Computer', 'No one, tie game'],
        winner: ''
    },
    methods: {
        retry: function () {
            this.playerChoice = null;
            this.computerChoice = null;
            this.submitted = false;
            this.result = false;
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
            } this.games.push({
                number: this.round++,
                winner: this.winner
            })
        },
        deleteRound: function (roundNumber) {
            console.log('Invoked deleteRound from root Vue instance')
            function isMatchingRound(round) {
                return round.number != this;
            }
            this.games = this.games.filter(isMatchingRound, roundNumber);
        },
        tieGame: function () {
            this.tie = true;
            this.playerWin = false;
            this.computerWin = false;
            return this.winner = this.players[2];
        },
        playerWon: function () {
            this.tie = false;
            this.playerWin = true;
            this.computerWin = false;
            return this.winner = this.players[0];
        },
        computerWon: function () {
            this.tie = false;
            this.playerWin = false;
            this.computerWin = true;
            return this.winner = this.players[1];
        }
    }
})
