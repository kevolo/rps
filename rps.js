const choices = ["Rock", "Paper",, "Scissors"];
let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const computerChoice = choices[Math.floor(Math.random() * 3) + 1];
    //console.log("Computer Choice: ", computerChoice);
    return computerChoice;
}

const getHumanChoice = () => {
    const choiceNum = parseInt(prompt("Your choice?"));
    const humanChoice = choices[choiceNum-1];
    //console.log("Human Choice: ", humanChoice);
    return humanChoice;
}

const playRound = (humanChoice, computerChoice) => {
    console.log("Human Choice: ", humanChoice);
    console.log("Computer Choice: ", computerChoice);
    if ( humanChoice==="Rock" && computerChoice==="Scissors" ) {
        humanScore++;
        console.log("Rock beats Scissors - human wins");
    } else if ( humanChoice==="Paper" && computerChoice==="Rock" ) {
        humanScore++;
        console.log("Paper beats Rock - human wins");
    } else if ( humanChoice==="Scissors" && computerChoice==="Paper" ) {
        humanScore++;
        console.log("Scissors beats Paper - human wins");
    } else if ( humanChoice==="Rock" && computerChoice==="Paper" ) {
        computerScore++;
        console.log("Paper beats Rock - computer wins");
    } else if ( humanChoice==="Paper" && computerChoice==="Scissors" ) {
        computerScore++;
        console.log("Scissors beats Paper - computer wins");
    } else if ( humanChoice==="Scissors" && computerChoice==="Rock" ) {
        computerScore++;
        console.log("Rock beats Scissors - computer wins");
    } else {
        console.log("Tie");
    }
}

const playGame = () => {
    for (let i=0; i<5; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("Final score - Human: " + humanScore + " Computer: " + computerScore);
    if (humanScore>computerScore) {
        console.log("Human wins!");
    }
    else if (humanScore<computerScore) {
        console.log("Computer wins!");
    }
    else {
        console.log("Tied game...");
    }

}

playGame();