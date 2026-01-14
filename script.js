const container = document.querySelector('.container ');
const newSketch = document.querySelector('button');

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

// Increase opacity
const increaseOpacity = element => {
    const computedStyles = window.getComputedStyle(element);
    const opacity = Number(computedStyles.getPropertyValue('opacity'));
    if (opacity < 1) {
        element.style.opacity = `${opacity + 0.1}`;
    }
};

// Change background
const changeBackground = element => {
    if (!element.classList.contains('column')) return;
    const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    let randomColorIndex = Math.floor(Math.random() * 7);
    element.style.backgroundColor = rainbow[randomColorIndex];
};

container.addEventListener('mouseover', event => {
    const currentElement = event.target;
    changeBackground(currentElement);
    increaseOpacity(currentElement);
});

newSketch.addEventListener('click', event => {
    // Get new grid size (equal or less than 100)
    let totalSquares;
    do {
        totalSquares = prompt("Enter the desired grid size: ");
    } while (Number.isNaN(Number(totalSquares)) || Number(totalSquares) > 100)

    // Early exit and keep the grid if prompt is cancelled
    if (totalSquares === null) return;

    // Remove the grid
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }
    // Create new grid
    newGrid(Number(totalSquares));
});
