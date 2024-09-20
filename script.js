function createGrid(size) {
    const container = document.getElementById('container');
    container.innerHTML = '';

    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.dataset.interactions = '0';
        square.dataset.baseColor = '';
        
        square.addEventListener('mouseover', () => {
            colorLogic(square);
        });

        container.appendChild(square);
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function addOpacity(baseColor, opacity) {
    const [r, g, b] = baseColor.slice(4, -1).split(',').map(Number);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

function colorLogic(square) {
    let interactions = parseInt(square.dataset.interactions);

    if (interactions === 0) {
        const baseColor = getRandomColor();
        square.dataset.baseColor = baseColor;
        square.style.backgroundColor = addOpacity(baseColor, 0.1);
    } else {
        const baseColor = square.dataset.baseColor;
        const newOpacity = Math.min((interactions + 1) * 0.1, 1);
        square.style.backgroundColor = addOpacity(baseColor, newOpacity);
    }

    square.dataset.interactions = Math.min(interactions + 1, 10).toString();
}

const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', () => {
    let newSize = parseInt(prompt('Enter new grid size (1-100):'), 10);

    if (!newSize) {
        return;
    }

    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert('Please enter a number between 1 and 100.');
    }
});

createGrid(16);