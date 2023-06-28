const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const cellElemnts = document.querySelectorAll('[data-cell]');

cellElemnts.forEach(cell => {
  cell.addEventListener('click', handleClick, { once: true })
})

function handleClick(e) {
  // PlaceMark
  // Check For Win
  // Check For Draw
  // Switch Turns
}