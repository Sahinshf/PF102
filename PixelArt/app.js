const gridContainer = document.getElementById("gridContainer");
const colorPicker = document.getElementById("colorPicker");
const resetButton = document.getElementById("resetButton");

function CreateGrid(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.backgroundColor = "#fff";

    cell.addEventListener("click", () => {
      if (cell.style.backgroundColor !== "rgb(255, 255, 255)") {
        cell.style.backgroundColor = "#fff";
      } else {
        cell.style.backgroundColor = colorPicker.value;
      }
    });

    gridContainer.append(cell);
  }
}

function ResetGrid() {
  const cells = document.querySelectorAll(".cell");

  cells.forEach((element) => {
    element.style.backgroundColor = "#fff";
  });
}

CreateGrid(20);

resetButton.addEventListener("click", ResetGrid);
