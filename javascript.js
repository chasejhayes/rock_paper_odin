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
    return choice;
}


let computerScore = 0;
let humanScore = 0;

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();


function playRound(){
   if (humanChoice == computerChoice){
    return "It's a tie!";
   }
   else if (humanChoice=="rock" && computerChoice == "scissors") {
    return "Human wins";
   }
   else if (humanChoice=="rock" && computerChoice == "paper") {
    return "Computer wins";
   }
   else if (humanChoice == "paper" && computerChoice == "rock"){
    return "Human wins";
   }
   else if (humanChoice=="paper" && computerChoice == "scissors") {
    return "Computer wins";
   }
   else if (humanChoice=="scissors" && computerChoice == "rock") {
    return "Computer wins";
   }
   else if (humanChoice=="scissors" && computerChoice == "paper") {
    return "Human wins";
   }
}


let result = playRound();

function scoring(){
    if (result == "Human wins") {
        ++humanScore;
        return "Human wins!"
       }
    else if (result == "Computer wins") {
        ++computerScore
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

