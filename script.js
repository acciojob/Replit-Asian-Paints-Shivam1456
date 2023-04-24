// your JS code here. If required.
const gridItems = document.querySelectorAll('.grid-item');
const blockIdInput = document.getElementById('block_id');
const colorInput = document.getElementById('colour_id');
const changeButton = document.getElementById('change_button');
const resetButton = document.getElementById('reset_button');
// Function to change the background color of a grid item
function changeColor(blockId, color) {
  // Reset all grid items to transparent background color
  gridItems.forEach(item => item.style.backgroundColor = 'transparent');
  // Set the background color of the specified grid item to the specified color
  const block = document.getElementById(blockId);
  if (block) {
    block.style.backgroundColor = color;
  }
}

// Click event listener for the "Change color" button
changeButton.addEventListener('click', () => {
  const blockId = blockIdInput.value;
  const color = colorInput.value;
  changeColor(blockId, color);
});

// Click event listener for the "Reset" button
resetButton.addEventListener('click', () => {
  // Reset all grid items to transparent background color
  gridItems.forEach(item => item.style.backgroundColor = 'transparent');
});


