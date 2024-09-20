function createGrid(size) {
    const container = document.getElementById('container');
    container.innerHTML = '';

    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = getRandomColor();
        });

        container.appendChild(square);
    }
};

const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', () => {
    let newSize = parseInt(prompt('Enter new grid size (1-100):'), 10);

    if (!input) {
        return;
    }

    if (newSize && newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert('Please enter a number between 1 and 100.');
    }
});

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

createGrid(16);