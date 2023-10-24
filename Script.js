function getComputerChoice(){
    const rpc = ["Rock", "Paper", "Scissors"];
    const num = Math.floor(Math.random() * 3);
    return rpc[num];
}