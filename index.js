// // Import stylesheets
// import './style.css';

// // Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

const { performance } = require('perf_hooks');

var startTime = performance.now()
(() => {
  console.log('test')
})()