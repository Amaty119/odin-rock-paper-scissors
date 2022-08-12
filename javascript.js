//Rock = 0
//Paper = 1
//Scissors = 2

let playerScore = 0;
let computerScore = 0;

function toEmoji(num) {
    switch (num) {
        case 0:
            return("✊")
        case 1:
            return("✋");
        case 2:
            return("✌️")
    }
}

let getComputerChoice = function() {
    return(Math.floor(Math.random() * 3));
}

function playRound(playerSelection, computerSelection) {
    if(isOver()) {
        gameOver();
        return;
    }

    document.querySelector(".player").textContent = toEmoji(playerSelection);
    document.querySelector(".computer").textContent = toEmoji(computerSelection);

    if(playerSelection - 1 == computerSelection || (playerSelection == 0 && computerSelection == 2))
    {
        console.log("win");
        document.querySelector(".subheader").textContent = "You win!";
        playerScore++;
    }
    else if (playerSelection == computerSelection)
    {
        document.querySelector(".subheader").textContent = "You tie!";
        console.log("tie")
    }
    else {
        console.log("lose");
        document.querySelector(".subheader").textContent = "You lose!";
        computerScore++;
    }

    document.querySelector(".playerScore").textContent = playerScore;
    document.querySelector(".computerScore").textContent = computerScore;

    if(isOver()) {
        gameOver();
    }
}

function isOver() {
    if(playerScore == 5 || computerScore == 5)
    {
        return true;
    }
    return false;
}

function gameOver() {
    document.querySelector(".restart").textContent = "Restart";
    document.querySelector(".restart").classList.add("active")

    if(playerScore == 5) {
        document.querySelector(".subheader").textContent = "You've won the game!";
    }
    else {
        document.querySelector(".subheader").textContent = "You've lost the game!";
    }
}

function restart() {
    playerScore = 0;
    computerScore = 0;
    document.querySelector(".subheader").textContent = "First to score 5 points wins";
    document.querySelector(".player").textContent = "❔";
    document.querySelector(".computer").textContent = "❔";
    document.querySelector(".playerScore").textContent = "0";
    document.querySelector(".computerScore").textContent = "0";
    document.querySelector(".restart").classList.remove("active");
}