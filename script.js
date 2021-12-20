const userScore_El = document.getElementById("user-score");
const computerScore_El = document.getElementById("computer-score");
const scoreBoard_El = document.querySelector(".score-board");
const result_El = document.querySelector(".result p");
const rock_El = document.getElementById("rock");
const paper_El = document.getElementById("paper");
const scissors_El = document.getElementById("scissors");
let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

function win(user, computer) {
  userScore++;
  userScore_El.textContent = userScore;
  computerScore_El.textContent = computerScore;
  const smallUserWord = " (user)";
  const smallCompWord = " (comp)";
  result_El.textContent = `${user}${smallUserWord} beats ${computer}${smallCompWord} you win...🏆`;
  const win = new Audio("sounds/game-win.mp3");
  win.play();
  document.getElementById(user).classList.add("wins-glow");
  setTimeout(() => {
    document.getElementById(user).classList.remove("wins-glow");
  }, 500);
}

function lose(user, computer) {
  computerScore++;
  userScore_El.textContent = userScore;
  computerScore_El.textContent = computerScore;
  const smallUserWord = " (user)";
  const smallCompWord = " (comp)";
  result_El.textContent = `${user}${smallUserWord} loses to ${computer}${smallCompWord} you Lost...💩`;
  const lose = new Audio("sounds/game-over.wav");
  lose.play();
  document.getElementById(user).classList.add("lose-glow");
  setTimeout(() => {
    document.getElementById(user).classList.remove("lose-glow");
  }, 500);
}

function draw(user, computer) {
  const smallUserWord = " (user)";
  const smallCompWord = " (comp)";
  result_El.textContent = `${user}${smallUserWord} equals ${computer}${smallCompWord}. It is a draw`;
  const draw = new Audio("sounds/game-draw.wav");
  draw.play();
  document.getElementById(user).classList.add("draw-glow");
  setTimeout(() => {
    document.getElementById(user).classList.remove("draw-glow");
  }, 500);
}

function game(userChoice) {
  const computerchoice = getComputerChoice();
  switch (userChoice + computerchoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerchoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerchoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, computerchoice);
      break;
  }
}

function main() {
  rock_El.addEventListener("click", function () {
    game("rock");
  });

  paper_El.addEventListener("click", function () {
    game("paper");
  });

  scissors_El.addEventListener("click", function () {
    game("scissors");
  });
}

main();
