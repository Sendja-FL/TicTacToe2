// const grid = document.getElementById("grid")
const cells = document.getElementsByClassName("case")
const button = document.getElementById("button")

let joueur = "X"

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", () => {
    playGame(cells[i])
  })
  button.addEventListener("click", () => {
    reset(cells[i])
  })
  playTurn()
}

function playGame(cell) {
  if (cell.innerText != "") {
    return
  }
  cell.innerText = joueur
  if (joueur === "X") {
    joueur = "O"
  } else {
    joueur = "X"
  }
}
function reset() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = ""
    joueur = "X"
  }
}
