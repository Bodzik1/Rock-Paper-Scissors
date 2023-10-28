let roundsPlayed = 0; // Track the number of rounds played
const maxRounds = 5; // Set the maximum number of rounds
const playerImage = document.querySelector(".player");
const computerImage = document.querySelector(".computer");
const choices = ["rock", "paper", "scissors"];

document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerChoice) {
    if (roundsPlayed < maxRounds) {
        const computerChoice = computerPlay();
        const result = getResult(playerChoice, computerChoice);
        displayResult(result);
        updateImages(playerChoice, computerChoice);
        roundsPlayed++;

        if (roundsPlayed === maxRounds) {
            setTimeout(resetGame, 1000); // Reset the game after a delay
        }
    }
}

function getResult(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function displayResult(result) {
    document.getElementById("result").textContent = result;
}

function updateImages(playerChoice, computerChoice) {
    playerImage.src = `./images/${playerChoice}.png`;
    computerImage.src = `./images/${computerChoice}.png`;
}

function resetGame() {
    roundsPlayed = 0;
    document.getElementById("result").textContent = "";
    playerImage.src = "./images/mark.png";
    computerImage.src = "./images/mark.png";
}