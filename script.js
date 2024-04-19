const board = document.querySelector('.board');

setInterval(moveToNextGeneration, 500);

/* 
cell will be "alive" if cell on the left was "alive"
cell will be "alive" if cell above was "alive" and there's no cell on the right,
cell will be "alive" if cell on the right was "alive" and there's no cell below,
*/
function moveToNextGeneration() {
  const currentGrid = board.tBodies[0];
  const nextGrid = currentGrid.cloneNode(true);

  for (let i = 0; i < currentGrid.rows.length; i++) {
    const prevRow = currentGrid.rows[i - 1];
    const row = currentGrid.rows[i];
    const newRow = nextGrid.rows[i];
    const nextRow = currentGrid.rows[i + 1];

    for (let j = 0; j < row.cells.length; j++) {
      const alive = row.cells[j - 1]?.classList.contains('alive') ||
      prevRow?.cells[j]?.classList.contains('alive') && !row.cells[j + 1] ||
      row.cells[j + 1]?.classList.contains('alive') && !nextRow;
      
      newRow.cells[j].classList.toggle('alive', !!alive);
    }
  }

  currentGrid.replaceWith(nextGrid);
}
