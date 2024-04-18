function toggleCellState(cellId) {
  const cell = document.getElementById(cellId);
  
  cell.classList.toggle('alive');
  cell.classList.toggle('dead');
}

// Функция для переключения состояния клеток каждые 500 миллисекунд
setInterval(function() {
  toggleCellState('cell1');
  toggleCellState('cell2');
}, 500);