function getComputerChoice() {
    return Math.floor(Math.random() *3) +1; //random number 1-3
}
function getUserChoice() {
    let userChoice = prompt("Enter your choice: rock, paper, or scissors?");
    userChoice = userChoice.toLowerCase(); //makes all strings lowercase for easy comparison
    let correctChoice = false;  
    while (correctChoice == false) { //error handling to make sure users enter correct terms
        if(userChoice == "rock") {
            correctChoice = true;
            return 1; //converts user input rock to number 1 for better comparison
        }
        else if(userChoice == "paper") {
            correctChoice = true;
            return 2; //converts user input paper to number 1 for better comparison
        }
        else if(userChoice == "scissors") {
            correctChoice = true;
            return 3; //converts user input scissors to number 1 for better comparison
        }
        else {
            alert("please enter a valid choice"); //alert for incorrect input
            userChoice = prompt("Enter your choice: rock, paper, or scissors?");
            userChoice = userChoice.toLowerCase();
        }
    }     
}
let userScore = 0; // score counters
let computerScore = 0;
function playRound(userChoice,computerChoice) {
    userChoice = userChoice.toLowerCase();
    if (userChoice == "rock") { // if statement for rock (refer to line 11)
        if (computerChoice == 2) {
            alert(" You lose! Paper beats Rock");
            computerScore++; // lost round
        }
        else if (computerChoice == 3) {
            alert(" You Win! Rock beats Scissors.");
            userScore++; // won round
        }
        else {
            alert("It's a tie!");
        }
    }
    else if (userChoice == "paper") { // if statement for paper (refer to line 15)
        if (computerChoice == 3) {
            alert(" You Lose! Scissors beats Paper");
            computerScore++; // won round
        }
        else if (computerChoice == 1) { 
            alert(" You Win! Paper beats Rock.");
            userScore++; // lost round
        }
        else {
            alert("It's a tie!");
        }
    }
    else if (userChoice == "scissors") { // if statement for scissors (refer to line 19)
        if (computerChoice == 1) {
            alert(" You Lose! Rock beats Scissors");
            computerScore++; // you lost
            console.log(computerScore)
        }
        else if (computerChoice == 2) {
            alert(" You Win! Scissors beats Paper.");
            userScore++; //you won
            console.log(computerScore)
        }
        else {
            alert("It's a tie!");
        }
    }

        const section = document.querySelector("#displayPanel");

        const oldPanel = section.querySelector(".scorePanel")
        if (oldPanel) {
            oldPanel.remove();
        }

        const displayPanel = document.createElement("div");
        displayPanel.classList.add("scorePanel")

        const displayComputerScore = document.createElement("h3");
        const displayUserScore = document.createElement("h3");

        displayPanel.appendChild(displayComputerScore);
        displayPanel.appendChild(displayUserScore);

        displayComputerScore.textContent = `Computer Score: ${computerScore}`;
        displayUserScore.textContent = `User Score: ${userScore}`;

        section.appendChild(displayPanel);
        if (computerScore === 5) {
            displayComputerScore.remove();
            displayUserScore.remove();
            const computerWinnerText = document.createElement("h1")
            computerWinnerText.textContent = "Oh no, the computer has won!"
            displayPanel.appendChild(computerWinnerText)
            computerScore = 0;
            userScore = 0;
        }
        else if (userScore === 5) {
            displayComputerScore.remove();
            displayUserScore.remove();
            const userWinnerText = document.createElement("h1")
            userWinnerText.textContent = "Congratulations you won!"
            displayPanel.appendChild(userWinnerText);
            computerScore = 0;
            userScore = 0;
        }
}

function playGame(num) {
    for (let i = 1; i <= num; i++) {
        let userChoice = getUserChoice();
        let computerChoice = getComputerChoice;
        playRound(userChoice,computerChoice);
    }
    if (computerScore > userScore) {
        alert(`You lost the game by ${computerScore-userScore} rounds and finished with a total score of Computer score: ${computerScore}, User Score ${userScore}.`);
    }
    else if (computerScore < userScore) {
        alert(`You won the game by ${userScore-computerScore} rounds and finished with a total score of Computer score: ${computerScore}, User Score ${userScore}.`);
    }
    else {
        alert(`You tied the game and finished with a total score of Computer score: ${computerScore}, User Score ${userScore}.`);
    }
}
const buttons = document.querySelectorAll("button");
buttons.forEach(btn => {
    btn.addEventListener("click", (e) =>{
        playRound(btn.textContent,getComputerChoice());
    });
})

