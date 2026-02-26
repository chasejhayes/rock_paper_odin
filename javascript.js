// const rockButton = document.createElement("button");
// const paperButton = document.createElement("button");
// const scissorsButton = document.createElement("button");

// rockButton.textContent = "ROCK";
// paperButton.textContent = "PAPER";
// scissorsButton.textContent = "SCISSORS";

// const body = document.querySelector(".body");
// body.appendChild(rockButton);
// body.appendChild(paperButton);
// body.appendChild(scissorsButton);


// const btn = document.querySelector("button");

// function btnRound(){
//     return playGame()
// } 

// btn.addEventListener("click", btnRound)




let computerScore = 0;
let humanScore = 0;


function playGame(){

    function getComputerChoice(){
        let choice = Math.random();
        if (choice <= .33){
            return "rock"
        }
        else if (choice > .33 && choice <= .66){
            return "paper"
        }
        else if (choice > .66){
            return "scissors"
        }
    }
    
    function getHumanChoice(){
        let choice = prompt("Rock, Paper, or Scissors?");
        return choice.toLowerCase();
    }
    
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    
    
    function playRound(computerChoice, humanChoice){
       if (humanChoice == computerChoice){
        return "It's a tie!";
       }
       else if (humanChoice=="rock" && computerChoice == "scissors") {
        return "Human wins";
       }
       else if (humanChoice == "paper" && computerChoice == "rock"){
        return "Human wins";
       }
       else if (humanChoice=="scissors" && computerChoice == "paper") {
        return "Human wins";
       }
       else {
        return "Computer wins";
       }
    }
    
    
    let result = playRound(computerChoice, humanChoice);
    
    
    
    function scoring(){
        if (result == "Human wins") {
            ++humanScore;
            return "Human wins!"
           }
        else if (result == "Computer wins") {
            ++computerScore;
            return "Computer wins!"
           }
        else {
            return "Nobody wins!"
        }
    }  
    
    console.log(scoring());
    console.log(humanChoice);
    console.log(computerChoice);
    console.log(humanScore);
    console.log(computerScore);

    }





function endGame(){
    if (computerScore > humanScore){
        return "Computer wins the game!"
    }
    else if (humanScore > computerScore){
        return "Human wins the game!"
    }
    else {
        return "The game is tied!"
    }
}

// console.log(playGame());
// console.log(playGame());
// console.log(playGame());
// console.log(playGame());
// console.log(playGame());
// console.log(endGame());


const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

rockButton.textContent = "ROCK";
paperButton.textContent = "PAPER";
scissorsButton.textContent = "SCISSORS";

rockButton.classList.add("rock");
paperButton.classList.add("paper");
scissorsButton.classList.add("scissors");



const body = document.querySelector(".body");
body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorsButton);


const playRock = document.querySelector(".rock");
const playPaper = document.querySelector(".paper");
const playScissors = document.querySelector(".scissors");

function btnRound(){
    return playGame()
} 

playRock.addEventListener("click", btnRound);
playPaper.addEventListener("click", btnRound);
playScissors.addEventListener("click", btnRound);



