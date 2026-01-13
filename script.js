const container = document.querySelector('div');
const newSketch = document.createElement('button');
newSketch.textContent = "New Sketch";
container.appendChild(newSketch);

// Create the grid
let newGrid = gridSize => {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let j = 0; j < gridSize; j++) {
            const column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);
        }
    }
};

newGrid(16);

document.addEventListener('mouseover', event => {
    if (!event.target.classList.contains('column')) return;
    event.target.style.background = "green";
});

newSketch.addEventListener('click', event => {
    let totalSquares;
    do {
        totalSquares = prompt("Enter the desired grid size: ");
    } while (totalSquares === null || Number.isNaN(Number(totalSquares)) || Number(totalSquares) > 100)

    // Remove the grid
    while (container.lastChild !== newSketch) {
        // console.log(container.remove(container.lastChild))
        container.removeChild(container.lastChild);
    }

    // Create new grid
    newGrid(totalSquares);
});
