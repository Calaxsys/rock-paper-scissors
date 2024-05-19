let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
    let choiceInput = prompt("Select Rock, Paper or Scissors");
    console.log(choiceInput)
    if (choiceInput.toLowerCase() === "rock") {
        return choiceInput
    } else if (choiceInput.toLowerCase() === "paper") {
        return choiceInput
    } else if (choiceInput.toLowerCase() === "scissors") {
        return choiceInput
    } else {
        console.log("Please enter a valid choice")
        getHumanChoice();
    }
}



function playGame() {
    for (let rounds = 0; rounds <= 5; rounds++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);

        function playRound(humanChoice, computerChoice) {
            if (humanChoice === "rock" && computerChoice === "paper") {
                console.log("You lose! Paper beats Rock");
                computerScore++;
                playRound();
            } else if (computerChoice === "rock" && humanChoice === "paper") {
                console.log("You Win! Paper beats Rock");
                humanScore++;
                playRound();
            } else if (humanChoice === "paper" && computerChoice === "scissors") {
                console.log("You lose! Scissors beat Paper");
                computerScore++;
                playRound();
            } else if (computerChoice === "paper" && humanChoice === "scissors") {
                console.log("You Win! Scissors beat Paper");
                humanScore++;
                playRound();
            } else if (humanChoice === "scissors" && computerChoice === "rock") {
                console.log("You lose! Rock beats Scissors");
                computerScore++;
                playRound();
            } else if (computerChoice === "scissors" && humanChoice === "rock") {
                console.log("You Win! Rock beats Scissors");
                humanScore++;
                playRound();
            } else {
                console.log("Tie");
            }
        }
    }    
}

playGame()


