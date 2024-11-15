// Initialize the grid
function createGrid(size = 16) {
  const container = document.getElementById('maincontainer');
  container.innerHTML = ''; // Clear previous cells
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('gamecell');
    cell.addEventListener('mouseover', colorCell);
    container.appendChild(cell);
  }
}

// Change cell color
function colorCell(event) {
  const color =
    document.querySelector('.featurebutton.active')?.dataset.color || 'black';
  if (color === 'rainbow') {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else if (color === 'opaque') {
    this.style.opacity = this.style.opacity
      ? parseFloat(this.style.opacity) + 0.1
      : 0.1;
  } else {
    this.style.backgroundColor = color;
  }
}

// Reset grid
function resetGrid() {
  document.querySelectorAll('.gamecell').forEach((cell) => {
    cell.style.backgroundColor = '';
    cell.style.opacity = '';
  });
}

// Set active button
document.querySelectorAll('.featurebutton').forEach((button) => {
  button.addEventListener('click', () => {
    document
      .querySelectorAll('.featurebutton')
      .forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

// Initialize grid on page load
document.addEventListener('DOMContentLoaded', () => createGrid(16));
