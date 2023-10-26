const choices = ["rock", "paper", "scissors"];

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
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

function game(playerChoice) {
    const computerChoice = computerPlay();
    const result = playRound(playerChoice, computerChoice);
    document.getElementById("result").textContent = result;
}

  document.getElementById("rock").addEventListener("click", () => game("rock"));
  document.getElementById("paper").addEventListener("click", () => game("paper"));
  document.getElementById("scissors").addEventListener("click", () => game("scissors"));