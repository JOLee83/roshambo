
let oneChoice = "";
let twoChoice = "";
let whoWon = document.querySelector(".thewinneris");

const checkWinner = () => {
  console.log("check winner works");
    if (oneChoice !== "" && twoChoice !== "") {

      if ((oneChoice === "rock" && twoChoice === "scissor") ||
         (oneChoice === "paper" && twoChoice === "rock") ||
         (oneChoice === "scissor" && twoChoice === "paper")) {
           whoWon.textContent = "PLAYER 1 WINS!!!"
      }

      if ((oneChoice === "rock" && twoChoice === "paper") ||
         (oneChoice === "paper" && twoChoice === "scissors") ||
         (oneChoice === "scissor" && twoChoice === "rock")) {
          whoWon.textContent = "PLAYER 2 WINS!!!"
      }
      if ((oneChoice === "rock" && twoChoice === "rock") ||
         (oneChoice === "paper" && twoChoice === "paper") ||
         (oneChoice === "scissor" && twoChoice === "scissor")) {
          whoWon.textContent = "IT'S A TIE"
      }
    }
};
const goAgain =() => {
  oneChoice = ""
  twoChoice = ""
  whoWon.textContent = ""
}
// player 1
const rockOne = () => {
  console.log("rock one works");
  oneChoice = "rock";
  checkWinner();
};
const paperOne = () => {
  console.log("paper one works");
  oneChoice = "paper"
  checkWinner();
};
const scissorsOne = () => {
  console.log("scissors one works");
  oneChoice = "scissors"
  checkWinner();
};


// player 2
const rockTwo = () => {
  console.log("rock two works");
  twoChoice = "rock"
  checkWinner();
};
const paperTwo = () => {
  console.log("paper two works");
  twoChoice = "paper"
  checkWinner();
};
const scissorsTwo = () => {
  console.log("scissors two works");
  twoChoice = "scissors"
  checkWinner();
};

const main = () => {

  const oneRock = document.querySelector(".po .rk");
  oneRock.addEventListener("click", rockOne);

  const oneRockCheck = document.querySelector(".po .rk");
  oneRockCheck.addEventListener("click", checkWinner);

  const onePaper = document.querySelector(".po .pr");
  onePaper.addEventListener("click", paperOne);

  const oneScissors = document.querySelector(".po .ss");
  oneScissors.addEventListener("click", scissorsOne);

  const twoRock = document.querySelector(".pt .rk");
  twoRock.addEventListener("click", rockTwo);

  const twoPaper = document.querySelector(".pt .pr");
  twoPaper.addEventListener("click", paperTwo);

  const twoScissors = document.querySelector(".pt .ss");
  twoScissors.addEventListener("click", scissorsTwo);

  const playAgain = document.querySelector(".reset")
  playAgain.addEventListener("click", goAgain)

  //document.querySelector('#winner').textContent += "PLAYER" + `${oneOrTwo}`
};

document.addEventListener('DOMContentLoaded', main)
