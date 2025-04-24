const prompt = require('prompt-sync')();

const handleElevarAsiMismo = num => num ** num;

const number = Number(prompt('Introduce un numero: '));

const result = handleElevarAsiMismo(number);
console.log(`${number}^${number} = ${result}`);


