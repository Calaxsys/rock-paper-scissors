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

getComputerChoice()