const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
let isGameOver = false;

function checkWin() {
  const winCombos = [
    [0, 1, 2 ,3],  // rows
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],  // columns
    [0, 4, 8, 12],
    [1, 5, 9 ,13],
    [2, 6, 10, 14],  // diagonals
    [3, 7, 11 ,15],
    [0, 5, 10, 15],
    [3, 6, 9, 12],
  ];

  return winCombos.some(combo => {
    const [a, b, c, d] = combo;
    return (
      cells[a].textContent === currentPlayer &&
      cells[b].textContent === currentPlayer &&
      cells[c].textContent === currentPlayer &&
      cells[d].textContent === currentPlayer
    );
  });
}

function checkDraw() {
  return [...cells].every(cell => cell.textContent !== '');
}

function handleClick(event) {
  const cell = event.target;

  if (cell.textContent !== '' || isGameOver) return;

  cell.textContent = currentPlayer;

  if (checkWin()) {
    alert(`${currentPlayer} wins!`);
    isGameOver = true;
    return;
  }

  if (checkDraw()) {
    alert(`It's a draw!`);
    isGameOver = true;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

cells.forEach(cell => {
  cell.addEventListener('click', handleClick);
});

// Reset button
document.getElementById('resetBtn').addEventListener('click', () => {
  cells.forEach(cell => cell.textContent = '');
  currentPlayer = 'X';
  isGameOver = false;
});

