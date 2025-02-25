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

// Issue: || and && need to be used with boolean values
// (humanChoice == "rock" && computerChoice == "rock") || (humanChoice == "paper" && computerChoice == "paper") || (humanChoice == "scissors" && computerChoice == "scissors")  
function playRound(){
   if (humanChoice == computerChoice){
    return console.log("It's a tie!")
   }
   else if (humanChoice=="rock" && computerChoice == "scissors") {
    return console.log("Human wins")
   }
   else if (humanChoice=="rock" && computerChoice == "paper") {
    return console.log("Computer wins")
   }
   else if (humanChoice == "paper" && computerChoice == "rock"){
    return console.log("Human wins")
   }
   else if (humanChoice=="paper" && computerChoice == "scissors") {
    return console.log("Computer wins")
   }
   else if (humanChoice=="scissors" && computerChoice == "rock") {
    return console.log("Computer wins")
   }
   else if (humanChoice=="scissors" && computerChoice == "paper") {
    return console.log("Human wins")
   }
}

let result = playRound();

function scoring(){
    if (result === "Human wins") {
        return ++humanScore
       }
    else if (result === "Computer wins") {
        return ++computerScore
       }
    else {
        return "Nobody wins!"
    }
}

// console.log(playRound()); (Results in 'undefined')
console.log(scoring());
console.log(humanChoice);
console.log(computerChoice);
console.log(humanScore);
console.log(computerScore);

