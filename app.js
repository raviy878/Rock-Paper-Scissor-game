  // Function to generate computer's choice
  function generateComputerChoice() {
    var choices = ["rock", "paper", "scissors"];
    var randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

// Function to handle user's choice
function handleUserChoice(userChoice) {
    var computerChoice = generateComputerChoice();
    var result = determineWinner(userChoice, computerChoice);
    document.getElementById("result").textContent = result;
    document.getElementById("user-choice").textContent = userChoice;
    document.getElementById("computer-choice").textContent = computerChoice;
}

// Attach event listeners to buttons
document.getElementById("rock").addEventListener("click", function() {
    handleUserChoice("rock");
});

document.getElementById("paper").addEventListener("click", function() {
    handleUserChoice("paper");
});

document.getElementById("scissors").addEventListener("click", function() {
    handleUserChoice("scissors");
});