function toggleCellState(cellId) {
  const cell = document.getElementById(cellId);

  cell.classList.toggle('alive');
  cell.classList.toggle('dead');
}
const board = document.querySelector('.board');

setInterval(updateNextGeneration, 500);

function updateNextGeneration() {
  const tableBody = board.tBodies[0];
  const rowCount = tableBody.rows.length;
  const colCount = tableBody.rows[0].cells.length;
  const newTableBody = tableBody.cloneNode(true);

  for (let i = 0; i < rowCount; i++) {
    const row = tableBody.rows[i];
    for (let j = 0; j < colCount - 1; j++) {
      const currentCell = row.cells[j];
      const leftCell = row.cells[j - 1];
      const newCell = newTableBody.rows[i].cells[j];
      if (leftCell?.classList.contains('alive')) {
        newCell.classList.add('alive');
      } else {
        newCell.classList.remove('alive');
      }
    }
  }

  for (let i = 0; i < rowCount; i++) {
    const row = tableBody.rows[i];
    const aboveCell = i > 0 ? tableBody.rows[i - 1].cells[colCount - 1] : null;
    const rightCell = row.cells[colCount];
    const newCell = newTableBody.rows[i].cells[colCount - 1];
    if (aboveCell && aboveCell.classList.contains('alive') && !rightCell) {
      newCell.classList.add('alive');
    }
    newCell.classList.remove('alive');
  }

  tableBody.replaceWith(newTableBody);
}





