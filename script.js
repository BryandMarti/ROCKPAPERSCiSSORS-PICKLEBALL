// Array containing the choices for the game
const choices = ["Rock", "Paper", "Scissors"];

// Getting references from HTML elements using their IDs
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

// Initializing variables to keep track of player and computer scores
let playerScore = 0;
let computerScore = 0;

// Function to play the game
function playGame(playerChoice) {
  // Randomly selecting computer's choice from the choices array
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  // Initializing variable to store the result of the game
  let result = "";

  // Checking if it's a tie
  if (playerChoice === computerChoice) {
    result = "IT'S A TIE!";
  } else {
    // Determining the result based on player's choice and computer's choice
    switch (playerChoice) {
      case "Rock":
        result = (computerChoice === "Scissors") ? "YOU WIN!" : "YOU LOSE!"; break;
      case "Paper":
        result = (computerChoice === "Rock") ? "YOU WIN!" : "YOU LOSE!"; break;
      case "Scissors":
        result = (computerChoice === "Paper") ? "YOU WIN!" : "YOU LOSE!"; break;
    }
  }

  // Updating the display with player's choice, computer's choice, and result
  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;

  // Removing any previous styling classes from resultDisplay
  resultDisplay.classList.remove("greenText", "redText");

  // Updating player and computer scores and displaying them
  switch(result){
    case "YOU WIN!":
      resultDisplay.classList.add("greenText"); // Adding green color to result display
      playerScore++; // Incrementing player's score
      playerScoreDisplay.textContent = playerScore; // Displaying updated player's score
      break;
    case "YOU LOSE!": 
      resultDisplay.classList.add("redText"); // Adding red color to result display
      computerScore++; // Incrementing computer's score
      computerScoreDisplay.textContent = computerScore; // Displaying updated computer's score
      break;
  }
}
