let ComputerChoice =  function(){
    const rockPaperScissors = [" ","Rock","Paper","Scissors"];
    let randomValue = rockPaperScissors[Math.floor(Math.random() * 3) + 1];
    return randomValue;
};

let rockValue = document.querySelector("#rock");
let scissorsValue = document.querySelector("#scissors");
let paperValue = document.querySelector("#paper");

function playerSelection(id){
    let element = document.getElementById(id)

    if(element) {
        return element.innerText;
    };
}

rockValue.addEventListener("click", function(){
    playerSelection("rock")});
paperValue.addEventListener("click", function(){ 
    playerSelection("paper")});
scissorsValue.addEventListener("click", function(){
    playerSelection("scissors")});


function singleRound(){
    let computerChoice = ComputerChoice();
    if((playerSelection() == computerChoice)){
        return "TIE!"
    } else if((playerSelection("rock") && computerChoice == "paper")){
        return "You lose, Paper beats Rock"
    } else if((playerSelection("paper") && computerChoice == "rock")){
        return "You win, Paper beats Rock"
    } else if((playerSelection("rock") && computerChoice == "scissors")){
        return "You win, Rock beats Scissors"
    } else if((playerSelection("scissors") && computerChoice == "rock")){
        return "You lose, Rock beats Scissors"
    } else if(playerSelection("scissors")&& computerChoice == "paper"){
        return "You win, Scissors beats Paper"
    } else if(playerSelection("paper")&& computerChoice == "scissors"){
        return "You lose, Scissors beats Paper"
    } else{
        return "Try again"
    }};

    let demo = document.querySelector(".demo");
    demo.innerText = singleRound();

