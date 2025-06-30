function getComputerChoice() {
    return Math.floor(Math.random() *3) +1;
}
function getUserChoice() {
    let userChoice = prompt("Enter your choice: rock, paper, or scissors?");
    let correctChoice = false;
    userChoice = userChoice.toLowerCase();  
    while (correctChoice == false) {
        if(userChoice == "rock") {
            correctChoice = true;
            return 1;
        }
        else if(userChoice == "paper") {
            correctChoice = true;
            return 2;
        }
        else if(userChoice == "scissors") {
            correctChoice = true;
            return 3;
        }
        else {
            alert("please enter a valid choice");
            userChoice = prompt("Enter your choice: rock, paper, or scissors?");
            userChoice = userChoice.toLowerCase();
        }
    }     
}
let userScore = 0;
let computerScore = 0;
function playRound(userChoice,computerChoice) {
    if (userChoice == 1) {
        if (computerChoice == 2) {
            alert(" You lose! Paper beats Rock");
            computerScore++;
            console.log(computerScore)
        }
        else if (computerChoice == 3) {
            alert(" You Win! Rock beats Scissors.");
            userScore++;
            console.log(computerScore)
        }
    }
    else if (userChoice ==2) {
        if (computerChoice == 3) {
            alert(" You Lose! Scissors beats Paper");
            computerScore++;
            console.log(computerScore)
        }
        else if (computerChoice == 1) {
            alert(" You Win! Paper beats Rock.");
            userScore++;
            console.log(computerScore)
        }

    }
    else if (userChoice == 3) {
        if (computerChoice == 1) {
            alert(" You Lose! Rock beats Scissors");
            computerScore++;
            console.log(computerScore)
        }
        else if (computerChoice == 2) {
            alert(" You Win! Scissors beats Paper.");
            userScore++;
            console.log(computerScore)
        }
    }
    else {
        alert("It's a tie!");
    }
}

function playGame(num) {
    for (let i = 1; i <= num; i++) {
        let userChoice = getUserChoice();
        let computerChoice = getComputerChoice();
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
playGame(3);
