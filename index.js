
// Import stylesheets
import './style.css';

console.log('test')
  console.log('reportWindowSize triggered')
  console.log(document.querySelector('.container'))
  const containerDiv = document.querySelector('.container');
  const containerDivItem = document.querySelector('.container > div');


function moveToIndex() {
  console.log(containerDiv.clientHeight);
  console.log(containerDivItem.clientHeight);
  containerDiv.scrollTo({top: 20*containerDivItem.clientHeight, behavior: 'smooth'});
}


window.addEventListener('resize', reportWindowSize);
containerDiv.addEventListener('mousedown', initDrag, false);


moveToIndex()
function reportWindowSize() {
  console.log('reportWindowSize')
  moveToIndex()
}

function reportElementSize() {
  console.log('reportElementSize')
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