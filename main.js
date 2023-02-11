let userScore = 0;
let compScore = 0;
const playerScore_span = document.getElementById("playerScore");
const compScore_span = document.getElementById("compScore");
const result_p = document.querySelector(".resultText > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getCompChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(userChoice, compChoice) {
  playerScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${userChoice} beats ${compChoice}`;
  userScore++;
}

function lose(userChoice, compChoice) {
  playerScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${compChoice} beats ${userChoice}`;
  compScore++;
}

function draw() {
  result_p.innerHTML = "Draw";
}

function game(userChoice) {
  const compChoice = getCompChoice();
  switch (userChoice + compChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, compChoice);
      break;

    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, compChoice);
      break;

    case "rockrock":
    case "scissorsscissors":
    case "paperpaper":
      draw();
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("rock");
  });

  paper_div.addEventListener("click", function () {
    game("paper");
  });

  scissors_div.addEventListener("click", function () {
    game("scissors");
  });
}

main();
