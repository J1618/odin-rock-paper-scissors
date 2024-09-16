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

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice == computerChoice) {
  } else if (humanChoice == "rock") {
    if (computerChoice == "scissors") {
      addPoint(humanScore);
    } else {
      addPoint(computerScore);
    }
  } else if (humanChoice == "paper") {
    if (computerChoice == "rock") {
      addPoint(humanScore);
    } else {
      addPoint(computerScore);
    }
  } else {
    if (computerChoice == "paper") {
      addPoint(humanScore);
    } else {
      addPoint(computerScore);
    }
  }
  checkEnd();
}

function checkEnd() {
  let computerScoreNumber = parseInt(computerScore.textContent);
  let humanScoreNumber = parseInt(humanScore.textContent);
  if (computerScoreNumber >= 5 || humanScoreNumber >= 5) {
    if (computerScoreNumber > humanScoreNumber) {
      results.textContent = "Computer wins!";
    } else if (humanScoreNumber > computerScoreNumber) {
      results.textContent = "Human wins!";
    } else {
      results.textContent = "Tie!";
    }
  }
}

function addPoint(score) {
  score.textContent = parseInt(score.textContent) + 1;
}

var results = document.querySelector("#results");
var buttons = document.querySelectorAll("button");
var humanScore = document.querySelector("#human_score");
var computerScore = document.querySelector("#computer_score");
var humanChoiceVis = document.querySelector("#span_human_choice");
var computerChoiceVis = document.querySelector("#span_computer_choice");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let humanChoice = button.textContent;
    humanChoiceVis.textContent = humanChoice;
    let computerChoice = getComputerChoice();
    computerChoiceVis.textContent = computerChoice;
    playRound(humanChoice, computerChoice);
  });
});
