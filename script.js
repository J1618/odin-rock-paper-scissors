function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice == 0) {
    return "rock";
  } else if (choice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Rock, Paper, Scissors?:").toLowerCase();
  return choice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("Tie");
    return;
  } else if (humanChoice == "rock") {
    if (computerChoice == "scissors") {
      humanScore += 1;
      console.log("Human wins!");
    } else {
      computerScore += 1;
      console.log("Computer wins!");
    }
  } else if (humanChoice == "paper") {
    if (computerChoice == "rock") {
      humanScore += 1;
      console.log("Human wins!");
    } else {
      computerScore += 1;
      console.log("Computer wins!");
    }
  } else {
    if (computerChoice == "paper") {
      humanScore += 1;
      console.log("Human wins!");
    } else {
      computerScore += 1;
      console.log("Computer wins!");
    }
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log("Human score:" + humanScore);
    console.log("Computer score:" + computerScore);
  }
}

var humanScore = 0;
var computerScore = 0;
playGame();
