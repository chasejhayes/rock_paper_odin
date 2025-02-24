function getComputerChoice(){
    choice = Math.random();
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

// console.log(getComputerChoice())

function getHumanChoice(){
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    return humanChoice

}

console.log(getHumanChoice())