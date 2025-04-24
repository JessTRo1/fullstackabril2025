//npm init
//npm install prompt sync

const prompt = require('prompt-sync')();

let n1 = parseInt(prompt('Enter the first number: '));
let n2 = parseInt(prompt('Enter the second number: '));
let r = n1 + n2;

console.log(`The result is ${r}`)