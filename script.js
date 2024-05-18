const humanScore = 0;
const computerScore = 0;

function getComputerChoice() {
    let choiceNumber = Math.random()
    if (choiceNumber < 0.25) {
        console.log("rock")
        return "rock"
    } else if (choiceNumber > 0.25 && choiceNumber < 0.50) {
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

getHumanChoice()
getComputerChoice()