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

// Add event listeners to each cell for toggling state on click
let cell1 = document.getElementById('cell1');
let cell2 = document.getElementById('cell2');

cell1.addEventListener('click', function() {
  toggleCellState('cell1');
});

cell2.addEventListener('click', function() {
  toggleCellState('cell2');
});