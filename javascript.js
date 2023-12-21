function ComputerChoice () {
    const rockPaperScissors = [" ","Rock","Paper","Scissors"];
    let randomValue = rockPaperScissors[Math.floor(Math.random() * 3) + 1];
    alert(randomValue);
}
ComputerChoice();

