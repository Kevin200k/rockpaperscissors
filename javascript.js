let ComputerChoice =  function(){
    const rockPaperScissors = [" ","Rock","Paper","Scissors"];
    let randomValue = rockPaperScissors[Math.floor(Math.random() * 3) + 1];
    return randomValue;
};
let playerSelection = prompt("Pick either Rock, Paper, or Scissors")

playerSelection = playerSelection.toLowerCase();
function singleRound(){
    let computerChoice = ComputerChoice().toLowerCase();
    if((playerSelection == computerChoice)){
        return "TIE!"
    } else if((playerSelection == "rock" && computerChoice == "paper")){
        return "You lose, Paper beats Rock"
    } else if((playerSelection == "paper" && computerChoice == "rock")){
        return "You win, Paper beats Rock"
    } else if((playerSelection == "rock" && computerChoice == "scissors")){
        return "You win, Rock beats Scissors"
    } else if((playerSelection == "scissors" && computerChoice == "rock")){
        return "You lose, Rock beats Scissors"
    } else if(playerSelection == "scissors" && computerChoice == "paper"){
        return "You win, Scissors beats Paper"
    } else if(playerSelection == "paper" && computerChoice == "scissors"){
        return "You lose, Scissors beats Paper"
    }
    }
alert(singleRound())