function toggleCellState(cellId) {
  var cell = document.getElementById(cellId);
  if (cell.classList.contains('alive')) {
      cell.classList.remove('alive');
      cell.classList.add('dead');
  } else {
      cell.classList.remove('dead');
      cell.classList.add('alive');
  }
}

// Функция для переключения состояния клеток каждые 500 миллисекунд
setInterval(function() {
  toggleCellState('cell1');
  toggleCellState('cell2');
}, 500);