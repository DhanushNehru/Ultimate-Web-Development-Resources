const options = ["stone", "paper", "scissors"];

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.id;
        const computerChoice = options[Math.floor(Math.random() * 3)];
        const result = determineWinner(userChoice, computerChoice);
        displayResult(result, userChoice, computerChoice);
    });
});

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "stone" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "stone")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function displayResult(result, userChoice, computerChoice) {
    const message = `You chose ${userChoice}, the computer chose ${computerChoice}. ${result}`;
    document.getElementById("message").textContent = message;
}
