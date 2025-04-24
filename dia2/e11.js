const prompt = require('prompt-sync')();

function potencia(base, exponente) {
    return Math.pow(base, exponente);
}

let n1 = parseInt(prompt("Introduce la base: "));
let n2 = parseInt(prompt("Introduce el exponente: "));
console.log(potencia(n1, n2));