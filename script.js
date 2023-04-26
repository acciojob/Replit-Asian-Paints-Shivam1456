// your JS code here. If required.
const gridCells = document.querySelectorAll('.grid-item');
const blockIdInput = document.getElementById('block_id');
const colorIdInput = document.getElementById('color_id');
const changeButton = document.getElementById('change_button');
const resetButton = document.getElementById('reset');

changeButton.addEventListener('click', () => {
  const blockId = blockIdInput.value;
  const colorId = colorIdInput.value;
  const selectedCell = document.getElementById(blockId);
  selectedCell.style.backgroundColor = colorId;
});

resetButton.addEventListener('click', () => {
  gridCells.forEach(cell => {
    cell.style.backgroundColor = 'transparent';
  });
});



