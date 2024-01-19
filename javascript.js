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
};
 


function singleRound(id){
    // let playerChoice = playerSelection("rock")||playerSelection("paper")||playerSelection("scissors");
    let playerChoice = playerSelection(id);
    let computerChoice = ComputerChoice();
    if((playerChoice === computerChoice)){
        // return `You chose ${playerChoice}, and the Computer chose ${computerChoice}. TIE!`
        return ( {'result': 'TIE!', 'resultMessage':`You chose ${playerChoice}, and the Computer chose ${computerChoice}. TIE!`});

    } else if(playerChoice === "Rock" && computerChoice === "Paper"||
              playerChoice === "Paper" && computerChoice ==="Scissors"||
              playerChoice === "Scissors" && computerChoice === "Rock") {
                // return ( `You chose ${playerChoice}, and the Computer chose ${computerChoice}. You lose!`);
                return ( {'result': 'You lose', 'resultMessage':`You chose ${playerChoice}, and the Computer chose ${computerChoice}. You lose!`});
              } else {
            //    return (`You chose ${playerChoice}, and the Computer chose ${computerChoice}. You win!`);
               return ( {'result': 'You win', 'resultMessage':`You chose ${playerChoice}, and the Computer chose ${computerChoice}. You win!`});

              }};

    ;
let playerScoreValue = document.getElementById("playerScoreValue");
let computerScoreValue = document.getElementById("computerScoreValue");

let i = parseInt(playerScoreValue.innerText);
let j = parseInt(computerScoreValue.innerText);

function playerRound(id){
    let demo = document.querySelector(".demo");
    let res = singleRound(id);
    console.log('res ='+res.result)
    // do something
    demo.innerText = res.resultMessage
    

    if (i <= 4 && j <= 4) {
        if (res.result === "You win") {
            playerScoreValue.innerText = ++i;
            return playerScoreValue.innerText;
        } else if (res.result === "You lose") {
            computerScoreValue.innerText = ++j;
            return computerScoreValue.innerText;
        }

        // break
     } else if((i === 5 && !(j === 5))||(!(i === 5) && j === 5)){
        if (i < j) {
            console.log(i);
            demo.innerText = "Sorry, You lose"  

        } else if(i > j){
            console.log(j);
              demo.innerText = "Congratulations, You Win"
          }};
        };

// rockValue.addEvyGmaentListener("click", playerRound);
// paperValue.addEventListener("click", playerRound);
// scissorsValue.addEventListener("click", playerRound);

// singleRound() === `You chose Rock, and the Computer chose Paper. You lose!`||
// singleRound() === `You chose Paper, and the Computer chose Scissors. You lose!`||
// singleRound() === `You chose Scissors, and the Computer chose Rock. You lose!`


