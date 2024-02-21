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
 
let emojiName;
let rockEmoji = "👊";
let paperEmoji = "✋";
let scissorsEmoji = "✌️"
function singleRound(id){
    // let playerChoice = playerSelection("rock")||playerSelection("paper")||playerSelection("scissors");
    let playerChoice = playerSelection(id);
    if (playerChoice === rockEmoji){
        emojiName = "Rock";
    }else if(playerChoice === paperEmoji){
        emojiName = "Paper";
    }else if(playerChoice === scissorsEmoji){
        emojiName = "Scissors";
    }
    let computerChoice = ComputerChoice();
    if((playerChoice === rockEmoji && computerChoice === "Rock")){
        return ( {'result': 'TIE!', 'resultMessage':`You chose ${emojiName}, and the Computer chose ${computerChoice}. TIE!`});

    } else if((playerChoice === scissorsEmoji && computerChoice === "Scissors")){
        return ( {'result': 'TIE!', 'resultMessage':`You chose ${emojiName}, and the Computer chose ${computerChoice}. TIE!`});

    } else if((playerChoice === paperEmoji&& computerChoice === "Paper")){
        return ( {'result': 'TIE!', 'resultMessage':`You chose ${emojiName}, and the Computer chose ${computerChoice}. TIE!`});

    } else if(playerChoice === rockEmoji && computerChoice === "Paper"||
              playerChoice === paperEmoji && computerChoice ==="Scissors"||
              playerChoice === scissorsEmoji && computerChoice === "Rock") {
                return ( {'result': 'You lose', 'resultMessage':`You chose ${emojiName}, and the Computer chose ${computerChoice}. You lose!`});
              } else {
                 return ( {'result': 'You win', 'resultMessage':`You chose ${emojiName}, and the Computer chose ${computerChoice}. You win!`});

              }};

    ;
let playerScoreValue = document.getElementById("playerScoreValue");
let computerScoreValue = document.getElementById("computerScoreValue");

let i = parseInt(playerScoreValue.innerText);
let j = parseInt(computerScoreValue.innerText);

let scoreOne = 0; // Player Score
let scoreTwo = 0; // Computer Score
let demo = document.querySelector(".demo");

function playerRound(id){
    let res = singleRound(id);
    demo.innerText = res.resultMessage
    

    if (i <4 && j < 4) {
        if (res.result === "You win") {
            scoreOne= ++i;
            playerScoreValue.innerText = scoreOne;
            return playerScoreValue.innerText;
        } else if (res.result === "You lose") {
            scoreTwo = ++j;
            computerScoreValue.innerText = scoreTwo;
            return computerScoreValue.innerText;
        }
    }else if (i === 4 || j === 4) {
        if (i <4 || j < 4) {
            if (res.result === "You win") {
                scoreOne= ++i;
                playerScoreValue.innerText = scoreOne;
                return playerScoreValue.innerText;
            } else if (res.result === "You lose") {
                scoreTwo = ++j;
                computerScoreValue.innerText = scoreTwo;
                return computerScoreValue.innerText;
        }}
        else if (res.result === "You win") {
            scoreOne= ++i;
            if(scoreOne === 5){
                playerScoreValue.innerText = scoreOne;
                button.style.display = "none";
                playAgain.style.display = "block";
                demo.setAttribute("style", "font-size:40px; color:hsla(52, 100%, 50%); text-shadow: 3px 3px 10px;");
                demo.innerText = 'Congratulations, You Win';
            }
           
        } else if (res.result === "You lose") {
            scoreTwo = ++j;
           if(scoreTwo === 5){
                computerScoreValue.innerText = scoreTwo;
                button.style.display = "none";
                playAgain.style.display = "block";
                demo.setAttribute("style", "font-size:40px; color:hsla(52, 100%, 50%); text-shadow: 3px 3px 10px;");
                demo.innerText = 'Sorry, Lose';
                ;
           } else if((res.result === "TIE!")){
                scoreOne = i;
                scoreTwo = j;
           }
        }}
    // }else if(i === 5 && !(j === 5) || j === 5 && !(i === 5)){
    //         finalResult();
    //     }
    };

let button = document.querySelector("#button");
let playAgain = document.querySelector(".playAgain")

function finalResult(){
    button.style.display = "none";
    console.log("Micheal2194$")
    playAgain.style.display = "block";

    tryAgain();
}
function tryAgain(){
    
    i = 0;
    j = 0;
    scoreOne = 0;
    scoreTwo = 0;
    
    playerScoreValue.innerText = scoreOne;
    computerScoreValue.innerText = scoreTwo;
    demo.innerText = "";
    
    button.style.display = "flex";
    playAgain.style.display = "none"
            };

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


