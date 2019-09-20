// elements to work with
let submitButton = document.querySelector('#submitButton');
let results = document.querySelector('#results');
let resultsMessage = document.querySelector('#resultsMessage');
let tieMessage = document.querySelector('#tieMessage');
let winMessage = document.querySelector('#winMessage');
let loseMessage = document.querySelector('#loseMessage');

// hides results div until function is called
results.style.display = 'none';

// executes function when submit button is clicked
submitButton.addEventListener('click', pickShape);

function pickShape() {

    // gets the option the player picked
    let userChoice = document.getElementById("userShape").value;
    console.log(userChoice)
    var choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]
    console.log(computerChoice)

    // displays the results
    results.style.display = 'block'
    // displays the computer's choice
    resultsMessage.innerHTML = computerChoice;

    if (computerChoice == userChoice) {
        // it's a tie
        tieMessage.style.display = 'block';
        winMessage.style.display = 'none';
        loseMessage.style.display = 'none';
    } else if (computerChoice == "rock") {
        if (userChoice == "paper") {
            // user wins
            tieMessage.style.display = 'none';
            winMessage.style.display = 'block';
            loseMessage.style.display = 'none';
        }
        else {
            // computer wins
            tieMessage.style.display = 'none';
            winMessage.style.display = 'none';
            loseMessage.style.display = 'block';
        }
    } else if (computerChoice == "paper") {
        if (userChoice == "scissors") {
            // user wins
            tieMessage.style.display = 'none';
            winMessage.style.display = 'block';
            loseMessage.style.display = 'none';
        }
        else {
            // computer wins
            tieMessage.style.display = 'none';
            winMessage.style.display = 'none';
            loseMessage.style.display = 'block';
        }
    } else if (computerChoice == "scissors") {
        if (userChoice == "rock") {
            // user wins
            tieMessage.style.display = 'none';
            winMessage.style.display = 'block';
            loseMessage.style.display = 'none';
        }
        else {
            // computer wins
            tieMessage.style.display = 'none';
            winMessage.style.display = 'none';
            loseMessage.style.display = 'block';
        }
    }
}