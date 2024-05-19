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

