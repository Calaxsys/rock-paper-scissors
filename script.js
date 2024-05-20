let humanScore = 0;
let computerScore = 0;

//Logic to get computer choice
function getComputerChoice() {
    let choiceNumber = Math.random()
    if (choiceNumber < 0.33) {
        console.log("rock")
        return "rock"
    } else if (choiceNumber < 0.66) {
        console.log("paper")
        return "paper"
    } else {
        console.log("scissors")
        return "scissors"
    }
}

//Function to play a round, keep the score, and return winner
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `Tie! You both picked ${humanChoice}.`
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "You lose! Paper beats rock!";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "You lose! Rock beats scissors!";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "You lose! Scissors beat rock!";
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore++;
        return "You Win! Rock beats scissors!"
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        humanScore++;
        return "You Win! Scissors beat rock!";
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        humanScore++;
        return "You Win! Paper beats rock!";
    }
}

//Selecting button elements from index.html
const rockBtn = document.getElementById('rockButton');
const paperBtn = document.getElementById('paperButton');
const scissorsBtn = document.getElementById('scissorsButton');
const result = document.getElementById('result');
const humanScoreDisplay = document.getElementById('humanScore');
const computerScoreDisplay = document.getElementById('computerScore');

function playGame(pick) {
    let computerChoice = getComputerChoice();

    result.textContent = playRound(pick, computerChoice);
    humanScoreDisplay.textContent = "Human: " + humanScore;
    computerScoreDisplay.textContent = "Computer: " + computerScore;

    if (humanScore == 5) {
        result.textContent = "You Win the Game!";
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    } else if (computerScore == 5) {
        result.textContent = "You Lost the Game!"; 
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
}

//Functionality for buttons to work
rockBtn.addEventListener("click", function () {
    playGame("rock");
});

paperBtn.addEventListener("click", function () {
    playGame("paper");
});

scissorsBtn.addEventListener("click", function () {
    playGame("scissors");
})