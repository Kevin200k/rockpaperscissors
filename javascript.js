let ComputerChoice =  function(){
    const rockPaperScissors = [" ","Rock","Paper","Scissors"];
    let randomValue = rockPaperScissors[Math.floor(Math.random() * 3) + 1];
    return randomValue;
};
let playerSelection = prompt("Pick either Rock, Paper, or Scissors");


function singleRound(){
    let computerChoice = ComputerChoice().toLowerCase();
    if((playerSelection.toLowerCase() == computerChoice)){
        return "TIE!"
    } else if((playerSelection.toLowerCase() == "rock" && computerChoice == "paper")){
        return "You lose, Paper beats Rock"
    } else if((playerSelection.toLowerCase() == "paper" && computerChoice == "rock")){
        return "You win, Paper beats Rock"
    } else if((playerSelection.toLowerCase() == "rock" && computerChoice == "scissors")){
        return "You win, Rock beats Scissors"
    } else if((playerSelection.toLowerCase() == "scissors" && computerChoice == "rock")){
        return "You lose, Rock beats Scissors"
    } else if(playerSelection.toLowerCase() == "scissors" && computerChoice == "paper"){
        return "You win, Scissors beats Paper"
    } else if(playerSelection.toLowerCase() == "paper" && computerChoice == "scissors"){
        return "You lose, Scissors beats Paper"
    } else{
        return "Try again"
    }
    }
function game (){
    alert(singleRound());
    playerSelection = prompt("Pick either Rock, Paper, or Scissors");
    alert(singleRound());
    playerSelection = prompt("Pick either Rock, Paper, or Scissors");
    alert(singleRound());
    playerSelection = prompt("Pick either Rock, Paper, or Scissors");
    alert(singleRound());
    playerSelection = prompt("Pick either Rock, Paper, or Scissors");
    alert(singleRound());
}

game();
