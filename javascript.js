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

    } else if(playerChoice === "✋" && computerChoice === "Paper"||
              playerChoice === "✌️" && computerChoice ==="Scissors"||
              playerChoice === "👊" && computerChoice === "Rock") {
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

let scoreOne = 0; // Player Score
let scoreTwo = 0; // Computer Score
let finalResult;

function playerRound(id){
    let demo = document.querySelector(".demo");
    let res = singleRound(id);

    demo.innerText = res.resultMessage
    

    if (i <= 4 && j <= 4) {
        if (res.result === "You win") {
            scoreOne= ++i;
            playerScoreValue.innerText = scoreOne;
            return playerScoreValue.innerText;
        } else if (res.result === "You lose") {
            scoreTwo = ++j;
            computerScoreValue.innerText = scoreTwo;
            return computerScoreValue.innerText;
        }

        // break
     } else if((i === 5 && !(j === 5))||(!(i === 5) && j === 5)){
        if (i < j) {
            finalResult = "Sorry, You lose" ;
            demo.innerText = finalResult  

        } else if(i > j){
            finalResult  = "Congratulations, You Win"
            demo.innerText = finalResult 
          }};
        };
console.log(scoreOne);
    function tryAgain(){
        if((i === 5 && !(j === 5))||(!(i === 5) && j === 5)){
            if (i < j) {
                console.log(scoreOne);
                finalResult = "Sorry, You lose" ;
                demo.innerText = finalResult  
    
            } else if(i > j){
                console.log(scoreTwo);
                finalResult  = "Congratulations, You Win"
                demo.innerText = finalResult 
              }};
            };
    tryAgain();

let container = document.querySelector(".container");
let dialogue = document.querySelector(".dialogue")
function play(){
    container.style.display = "block";
    dialogue.style.display = "none"
}
// rockValue.addEvyGmaentListener("click", playerRound);
// paperValue.addEventListener("click", playerRound);
// scissorsValue.addEventListener("click", playerRound);

// singleRound() === `You chose Rock, and the Computer chose Paper. You lose!`||
// singleRound() === `You chose Paper, and the Computer chose Scissors. You lose!`||
// singleRound() === `You chose Scissors, and the Computer chose Rock. You lose!`


