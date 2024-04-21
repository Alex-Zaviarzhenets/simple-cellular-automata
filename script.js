function toggleCellState(cellId) {
  const cell = document.getElementById(cellId);

  cell.classList.toggle('alive');
  cell.classList.toggle('dead');
}
const board = document.querySelector('.board');

setInterval(updateNextGeneration, 500);

function updateNextGeneration(){
  const tableBody = board.tBodies[0]
  const firstRow = tableBody.rows[0]
  const newTableBody = tableBody.cloneNode(true);
  
  
  
  for (let i = 0; i < firstRow.cells.length; i++) {
    const cell = firstRow.cells[i - 1];
    const newCell = newTableBody.rows[0].cells[i];
    console.log(newCell)
    if (cell?.classList.contains('alive')) {
      
      newCell.classList.add('alive');
      
    } else {
      newCell.classList.remove('alive');
    }
  }

 
  tableBody.replaceWith(newTableBody);
}

