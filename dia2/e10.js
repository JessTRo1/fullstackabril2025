const prompt = require('prompt-sync')();

function calcularAreaCirculo(radio) {
    return Math.PI * radio * radio;
}

const radio = Number(prompt('Introduce el radio del círculo: '));

const area = calcularAreaCirculo(radio);
console.log(`El área del círculo es: ${area}`);
