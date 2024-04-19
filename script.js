const board = document.querySelector('.board');

setInterval(moveToNextGeneration, 500);

/* 
cell will be "alive" if cell on the left was "alive"
*/
function moveToNextGeneration() {
  const currentGrid = board.tBodies[0];
  const nextGrid = currentGrid.cloneNode(true);

  for (let i = 0; i < currentGrid.rows.length; i++) {
    const row = currentGrid.rows[i];
    const newRow = nextGrid.rows[i];

    for (let j = 0; j < row.cells.length; j++) {
      const alive = !!row.cells[j - 1]?.classList.contains('alive');
      
      newRow.cells[j].classList.toggle('alive', alive);
    }
  }

  currentGrid.replaceWith(nextGrid);
}
