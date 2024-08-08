const grid = document.getElementById("grid")
const resetBtn = document.getElementById("resetBtn")

let turn = "X"

const GRID_WIDTH = 4
const GRID_HEIGHT = 5

grid.style.gridTemplateColumns = `repeat(${GRID_WIDTH} , 1fr)`
for (let i = 0; i < GRID_HEIGHT * GRID_WIDTH; i++) {
  const cell = document.createElement("div")
  // console.log(cells)
  cell.classList.add("cell")
  cell.addEventListener("click", () => {
    if (cell.innerHTML == "") {
      cell.innerHTML = turn
      if (turn == "X") {
        turn = "O"
      } else if (turn == "O") {
        turn = "X"
      }
    }
  })
  grid.appendChild(cell)
}

resetBtn.addEventListener("click", () => {
  cell.forEach((cell) => (cell.innerHTML = ""))
  turn = "X"
})
