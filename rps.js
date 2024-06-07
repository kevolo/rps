const choices = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const replayBtn = document.getElementById("replay");
const resultsDiv = document.getElementById("results");
const scoresDiv = document.getElementById("scores");
replayBtn.style.display = "none";

const getComputerChoice = () => {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    //console.log("Computer Choice: ", computerChoice);
    return computerChoice;
}

const playRound = (humanChoice, computerChoice) => {
    console.log("Human Choice: ", humanChoice);
    console.log("Computer Choice: ", computerChoice);
    if ( humanChoice==="Rock" && computerChoice==="Scissors" ) {
        resultsDiv.textContent = "Rock beats Scissors - human wins";
        return "human";
    } else if ( humanChoice==="Paper" && computerChoice==="Rock" ) {
        resultsDiv.textContent = "Paper beats Rock - human wins";
        return "human";
    } else if ( humanChoice==="Scissors" && computerChoice==="Paper" ) {
        resultsDiv.textContent = "Scissors beats Paper - human wins";
        return "human";
    } else if ( humanChoice==="Rock" && computerChoice==="Paper" ) {
        resultsDiv.textContent = "Paper beats Rock - computer wins";
        return "computer";
    } else if ( humanChoice==="Paper" && computerChoice==="Scissors" ) {
        resultsDiv.textContent = "Scissors beats Paper - computer wins";
        return "computer";
    } else if ( humanChoice==="Scissors" && computerChoice==="Rock" ) {
        resultsDiv.textContent = "Rock beats Scissors - computer wins";
        return "computer";
    } else {
        resultsDiv.textContent = `Both chose: ${humanChoice} - Tie`;
        return "tie";
    }
}

const playGame = (humanSelection) => {
    const computerSelection = getComputerChoice();
    const winner = playRound(humanSelection, computerSelection);

    if (winner==="human") {
        humanScore++;
    } else if (winner==="computer") {
        computerScore++;
    }
    if (humanScore===5 || computerScore===5) {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        replayBtn.style.display = "block";
        scoresDiv.textContent = "Final score - Human: " + humanScore + " Computer: " + computerScore;
        if (humanScore>computerScore) {
            scoresDiv.innerHTML += '<br><span class="winner">Human wins!<span>';
        }
        else {
            scoresDiv.innerHTML += '<br><span class="winner">Computer wins!<span>';
        }
    } else {
        scoresDiv.textContent = "Current score - Human: " + humanScore + " Computer: " + computerScore;
    }
}

rockBtn.addEventListener("click", () => {
    playGame("Rock");
});

paperBtn.addEventListener("click", () => {
    playGame("Paper");
});

scissorsBtn.addEventListener("click", () => {
    playGame("Scissors");
});

replayBtn.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    replayBtn.style.display = "none";
    scoresDiv.textContent = "Current score - Human: 0 Computer: 0";
});
