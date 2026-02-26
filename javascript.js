
let computerScore = 0;
let humanScore = 0;


function playGame(entry) {

    function getComputerChoice() {
        let choice = Math.random();
        if (choice <= .33) {
            return "rock"
        }
        else if (choice > .33 && choice <= .66) {
            return "paper"
        }
        else if (choice > .66) {
            return "scissors"
        }
    }

    function getHumanChoice() {
        let choice = entry;
        return choice.toLowerCase();
    }

    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();


    function playRound(computerChoice, humanChoice) {
        if (humanChoice == computerChoice) {
            return "It's a tie!";
        }
        else if (humanChoice == "rock" && computerChoice == "scissors") {
            return "Human wins";
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            return "Human wins";
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            return "Human wins";
        }
        else {
            return "Computer wins";
        }
    }


    let result = playRound(computerChoice, humanChoice);



    function scoring() {
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

    // console.log(scoring());
    // console.log(humanChoice);
    // console.log(computerChoice);
    // console.log(humanScore);
    // console.log(computerScore);


    const div = document.createElement("div");
    const playerChoiceText = document.createElement("p")
    const computerChoiceText = document.createElement("p")
    const playerScoreText = document.createElement("p");
    const computerScoreText = document.createElement("p");
    const whoWonText = document.createElement("p");

    playerChoiceText.classList.add("playerChoice");
    computerChoiceText. classList.add("computerChoice");
    playerScoreText.classList.add("playerScore");
    computerScoreText.classList.add("computerScore");
    whoWonText.classList.add("whoWon");

    // const test = document.getElementsByClassName("playerChoice");

   


    body.appendChild(div);
    div.appendChild(playerChoiceText);
    div.appendChild(computerChoiceText);
    div.appendChild(playerScoreText);
    div.appendChild(computerChoiceText);
    div.appendChild(whoWonText);

    // test.textContent = humanChoice;


    
    playerChoiceText.textContent = getHumanChoice();
    computerChoiceText.textContent = getComputerChoice();
    playerScoreText.textContent = humanScore;
    computerScoreText.textContent = computerScore;
    whoWonText.textContent = scoring();

}



function endGame() {
    if (computerScore > humanScore) {
        return "Computer wins the game!"
    }
    else if (humanScore > computerScore) {
        return "Human wins the game!"
    }
    else {
        return "The game is tied!"
    }
}



// creates button elements for each choice
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

// adds text to each button
rockButton.textContent = "ROCK";
paperButton.textContent = "PAPER";
scissorsButton.textContent = "SCISSORS";

// adds a class to each button
rockButton.classList.add("rock");
paperButton.classList.add("paper");
scissorsButton.classList.add("scissors");


// adds the buttons to the body
const body = document.querySelector(".body");
body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorsButton);


// assigns variable to buttons
const playRock = document.querySelector(".rock");
const playPaper = document.querySelector(".paper");
const playScissors = document.querySelector(".scissors");


// runs the game when button is clicked
playRock.addEventListener("click", () => {
    playGame("rock")
});
playPaper.addEventListener("click", () => {
    playGame("paper")
});
playScissors.addEventListener("click", () => {
    playGame("scissors")
})



// add div that displays the results
// print the console.logs inside the div
// console.logs: player score, computer score, player choice, computer choice, who won 

// const div = document.createElement("div");
// const playerChoiceText = document.createElement("p")
// const computerChoiceText = document.createElement("p")
// const playerScoreText = document.createElement("p");
// const computerScoreText = document.createElement("p");
// const whoWonText = document.createElement("p");

// playerChoiceText.textContent = humanChoice;

// div.appendChild(playerChoiceText);
// div.appendChild(computerChoiceText);
// div.appendChild(playerScoreText);
// div.appendChild(computerChoiceText);
// div.appendChild(whoWonText);