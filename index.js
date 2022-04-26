
// Import stylesheets
import './style.css';

const containerDiv = document.querySelector('.container');
const containerDivItem = document.querySelector('.container > div');

function moveToIndex() {
  containerDiv.scrollTo({top: 20*containerDivItem.clientHeight, behavior: 'smooth'});
}

window.addEventListener('resize', reportWindowSize);
containerDiv.addEventListener('mousedown', initDrag, false);

moveToIndex()
function reportWindowSize() {
  moveToIndex()
}

function reportElementSize() {
  moveToIndex()
}

function initDrag(e) {
  document.documentElement.addEventListener('mousemove', reportElementSize, false);
  document.documentElement.addEventListener('mouseup', stopDrag, false);
}

function stopDrag(e) {
  document.documentElement.removeEventListener('mousemove', reportElementSize, false);
  document.documentElement.removeEventListener('mouseup', stopDrag, false);
}