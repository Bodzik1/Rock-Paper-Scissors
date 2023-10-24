function getComputerChoice(){
    const rps = ["Rock", "Paper", "Scissors"];
    const num = Math.floor(Math.random() * 3);
    return rps[num];
} 

function game(playerSelection, computerSelection){
    let results;
    let playerScore = 0;
    let computerScore = 0;
    let counter = 0;
    while(counter < 5){
        if(playerSelection == computerSelection){
            playerScore += null;
            computerScore += null;
        }else if(computerSelection == "Paper"){
            computerScore++;
        }else{
            playerScore++;
        }
        counter++;
    }
    
    if(playerScore > computerScore){
        results = "Player score " + playerScore + " computer score " + computerScore; 
    }
    else{
        results = "Computer score " + computerScore + " player score " + playerScore ;
    }


    return results;
}

for (let i = 0; i < 5; i++) {
    playerChoice = prompt("Enter youre choice");
}

let playerSelection = playerChoice;
const computerSelection = getComputerChoice();
console.log(game(playerSelection, computerSelection));
