const choices = document.querySelectorAll(".choice");
const result = document.querySelector(".result");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const playerChoice = choice.id;
        const computerChoice = getComputerChoice();
        const winner = getWinner(playerChoice, computerChoice);
        displayResult(playerChoice, computerChoice, winner);
    });
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        return "You win!";
    } else {
        computerScore++;
        return "Computer wins!";
    }
}

function displayResult(playerChoice, computerChoice, winner) {
    result.innerHTML = `
        You chose <strong>${playerChoice}</strong>.<br>
        Computer chose <strong>${computerChoice}</strong>.<br>
        <strong>${winner}</strong>
    `;
    
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;

    // Add animation class for result display
    result.classList.add("show-result");

    // Remove animation class after a delay
    setTimeout(() => {
        result.classList.remove("show-result");
    }, 1000);
}
