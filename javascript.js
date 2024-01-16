let ComputerChoice =  function(){
    const rockPaperScissors = [" ","Rock","Paper","Scissors"];
    let randomValue = rockPaperScissors[Math.floor(Math.random() * 3) + 1];
    return randomValue;
};

let rockValue = document.querySelector("#rock");
let scissorsValue = document.querySelector("#scissors");
let paperValue = document.querySelector("#paper");

function playerSelection(id){
    console.log('here'+id)
    let element = document.getElementById(id)

    if(element) {
        let res = element.innerText
        console.log('res'+res)

        return element.innerText;
    };
};

function singleRound(id){
    let computerChoice = ComputerChoice();
    // let playerChoice = playerSelection("rock")||playerSelection("paper")||playerSelection("scissors");
    let playerChoice = playerSelection(id);
    if((playerChoice === computerChoice)){
        return `You chose ${playerChoice}, and the Computer chose ${computerChoice}. TIE!`
    } else if(playerChoice === "Rock" && computerChoice === "Paper"||
              playerChoice === "Paper" && computerChoice ==="Scissors"||
              playerChoice === "Scissors" && computerChoice === "Rock") {
                return `You chose ${playerChoice}, and the Computer chose ${computerChoice}. You lose!`
              } else if((playerChoice === "Paper" && computerChoice === "Rock"||
                         playerChoice === "Scissors" && computerChoice ==="Paper"||
                         playerChoice === "Rock" && computerChoice === "Scissors")){
                    return `You chose ${playerChoice}, and the Computer chose ${computerChoice}. You win!`
    }};


function playerRound(id){
    let demo = document.querySelector(".demo");
    
    demo.innerText = singleRound(id)
    };
    
// rockValue.addEventListener("click", playerRound);
// paperValue.addEventListener("click", playerRound);
// scissorsValue.addEventListener("click", playerRound);


