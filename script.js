const gridContainer = document.querySelector("#grid-container");

function createGridDiv() {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  gridContainer.appendChild(gridItem);
}

let gridSize = prompt("Grid Size?");

for (let i = 0; i < gridSize; i++) {
  createGridDiv();
}
