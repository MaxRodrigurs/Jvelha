let user = {
  current: "X",
  X: 0,
  O: 0
};
let gameOver = false;
let table = document.querySelector(".game");
let winCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
let cells = document.querySelectorAll(".blocos");
let resetBtn = document.querySelector("#reset-btn");

table.addEventListener("click", function (event) {
  let cell = event.target;
  if (!gameOver && cell.classList.contains("blocos") && !cell.classList.contains("desativado")) {
    cell.textContent = user.current;
    cell.classList.add("desativado");
    checaWin();
    switchuser();
  }
});

resetBtn.addEventListener("click", resetGame);

function checaWin() {
  for (let i = 0; i < winCombinations.length; i++) {
    let winComb = winCombinations[i];
    let a = cells[winComb[0] - 1].textContent;
    let b = cells[winComb[1] - 1].textContent;
    let c = cells[winComb[2] - 1].textContent;

    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      gameOver = true;
      winDisplay(a);
      updatepontos(a);
      break;
    }
  }
}

function switchuser() {
  user.current = user.current === "X" ? "O" : "X";
}

function winDisplay(winner) {
  alert(winner + " ganhou!");
}

function updatepontos(winner) {
  user[winner]++;
  document.querySelector("#x-pontos").textContent = user.X;
  document.querySelector("#o-pontos").textContent = user.O;
}

function resetGame() {
  gameOver = false;
  user.current = "X";
  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
    cells[i].classList.remove("desativado");
  }
}
