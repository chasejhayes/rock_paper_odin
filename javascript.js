function getComputerChoice(){
    let computerChoice = Math.random();
    if (computerChoice <= .33){
        return "rock"
    }
    else if (computerChoice > .33 && choice <= .66){
        return "paper"
    }
    else if (computerChoice > .66){
        return "scissors"
    }
}

// console.log(getComputerChoice())

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    return humanChoice
}

// console.log(getHumanChoice())

let computerScore = 0;

let humanScore = 0;

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

function playRound(){
   if ((humanChoice == "rock" && computerChoice == "rock") || (humanChoice == "paper" && computerChoice == "paper") || (humanChoice == "scissors" && computerChoice == "scissors")  ){
    return console.log("It's a tie!")
   }
   else if (humanChoice=="rock" && computerChoice == "scissors") {
    return console.log("Human wins")
   }
   else if (humanChoice=="rock" && computerChoice == "paper") {
    return console.log("Computer wins")
   }
   else if (humanChoice == "paper" && computerChoice == "rock"){
    return console.log("human wins")
   }
   else if (humanChoice=="paper" && computerChoice == "scissors") {
    return console.log("computer wins")
   }
   else if (humanChoice=="scissors" && computerChoice == "rock") {
    console.log("computer wins")
   }
   else if (humanChoice=="scissors" && computerChoice == "paper") {
    return console.log("Human wins")
   }
}

console.log(playRound())

