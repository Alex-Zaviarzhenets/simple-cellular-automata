function toggleCellState(cellId) {
  const cell = document.getElementById(cellId);

  cell.classList.toggle('alive');
  cell.classList.toggle('dead');
}
const board = document.querySelector('.board');

setInterval(updateNextGeneration, 500);

function updateNextGeneration() {
  const tableBody = board.tBodies[0]; // тело таблицы
  const rowCount = tableBody.rows.length; // кол-во строк
  const colCount = tableBody.rows[0].cells.length; // кол-во столбцов
  const newTableBody = tableBody.cloneNode(true); // клонирование тела таблицы

  for (let i = 0; i < rowCount; i++) {
    const row = tableBody.rows[i];
    for (let j = 0; j < colCount - 1; j++) {
      const currentCell = row.cells[j]; // текущая клетка
      const leftCell = row.cells[j - 1]; // клетка слева от текущей
      const aboveCell = i > 0 ? tableBody.rows[i - 1].cells[j] : null; // клетка над текущей клеткой
      const rightCell = row.cells[j + 1]; // клетка справа от текущей
      const belowCell = i < rowCount - 1 ? tableBody.rows[i + 1].cells[j] : null; // клетка снизу от текущей
      const newCell = newTableBody.rows[i].cells[j];


      // * ячейка будет «живой», если ячейка слева была «живой»,
      // * ячейка будет «живой», если ячейка выше была «живой», а справа нет ячейки,
      // * ячейка будет «живой», если ячейка справа была «живой», а ниже нет ячейки,
      // * ячейка будет «живой», если ячейка ниже была «живой», а слева нет ячейки.


      if((leftCell && leftCell.classList.contains('alive')) ||
        (aboveCell && aboveCell.classList.contains('alive') && !leftCell) ||
        (rightCell && rightCell.classList.contains('alive')) && !belowCell) {
        (belowCell && belowCell.classList.contains('alive') && !leftCell)  
        newCell.classList.add('alive');
      } else {
        newCell.classList.remove('alive');
      }
    }
  }



  tableBody.replaceWith(newTableBody);
}





