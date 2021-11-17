// // Import stylesheets
// import './style.css';

// // Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

//self invoking function
(() => {
  console.log('test');
})();


const basicFunction = () => {
  console.log('test one');  
};

basicFunction();


const obj = {};
console.log(obj);

const obj1 = new Object();
console.log(obj1);

const obj2 = Object.create(Object.prototype, obj1)
console.log(obj2);