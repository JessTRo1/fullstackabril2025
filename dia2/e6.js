const prompt = require('prompt-sync')();

function handleEvenOdd(numero) {
    if (numero % 2 === 0) {
        return(`${numero} es par`);
    } else {
        return(`${numero} es impar`);
    }
}

let n = parseInt(prompt("Introduce un numero: "));
console.log(handleEvenOdd(n));