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
            console.log(computerScore)
        }
        else if (computerChoice == 3) {
            alert(" You Win! Rock beats Scissors.");
            userScore++; // won round
            console.log(computerScore)
        }
        else {
            alert("It's a tie!");
            userScore++;
            computerScore++;
        }
    }
    else if (userChoice == "paper") { // if statement for paper (refer to line 15)
        if (computerChoice == 3) {
            alert(" You Lose! Scissors beats Paper");
            computerScore++; // won round
            console.log(computerScore)
        }
        else if (computerChoice == 1) { 
            alert(" You Win! Paper beats Rock.");
            userScore++; // lost round
            console.log(computerScore)
        }
        else {
            alert("It's a tie!");
            userScore++;
            computerScore++;
        }
        const displayPanel = document.createElement("div");
        const displayComputerScore = document.createElement("h3");
        const displayUserScore = document.createElement("h3");

        displayPanel.appendChild(displayComputerScore);
        displayPanel.appendChild(displayUserScore);

        displayComputerScore.textContent = `Computer Score: ${computerScore}`;
        displayUserScore.textContent = `User Score: ${userScoe}`;

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
            userScore++;
            computerScore++;
        }
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

