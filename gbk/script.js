const userScore = 1;
const comScore = 0;
const userScore_p = document.getElementById("user_score");
const comScore_p = document.getElementById("komputer_score");
const score_div = document.querySelector(".score");
const hasil_div = document.querySelector(".hasil");
const ub_div = document.getElementById("ub");
const ug_div = document.getElementById("ug");
const uk_div = document.getElementById("uk");
const cb_div = document.getElementById("cb");
const cg_div = document.getElementById("cg");
const ck_div = document.getElementById("ck");

function getComputerChoice() {
  const choices = ["b", "g", "k"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function game(userChoice) {
  const computerChoice = getComputerChoice();
  if (computerChoice == "b") {
    document.getElementById("cb").classList.remove("d-none");
    document.getElementById("cg").classList.add("d-none");
    document.getElementById("ck").classList.add("d-none");
  } else if (computerChoice == "g") {
    document.getElementById("cg").classList.remove("d-none");
    document.getElementById("cb").classList.add("d-none");
    document.getElementById("ck").classList.add("d-none");
  } else if (computerChoice == "k") {
    document.getElementById("ck").classList.remove("d-none");
    document.getElementById("cg").classList.add("d-none");
    document.getElementById("cb").classList.add("d-none");
  }
  switch (userChoice + computerChoice) {
    case "bg":
    case "gk":
    case "kb":
      document.querySelector(".hasil").innerHTML = "Anda Menang";
      break;
    case "bk":
    case "gb":
    case "kg":
      document.querySelector(".hasil").innerHTML = "Anda Kalah";

      break;
    case "bb":
    case "gg":
    case "kk":
      document.querySelector(".hasil").innerHTML = "Draw";
      break;
  }
}

function main() {
  ub_div.addEventListener("click", function() {
    game("b");
  });
  ug_div.addEventListener("click", function() {
    game("g");
  });
  uk_div.addEventListener("click", function() {
    game("k");
  });
}
main();
