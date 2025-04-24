const prompt = require('prompt-sync')();

function handleCalcularArea(alto, ancho) {
    return alto * ancho;
} 

const alto = Number(prompt('Introduce el alto: '));
const ancho = Number(prompt('Introduce el ancho: '));

const area = handleCalcularArea(alto, ancho);
console.log(`El área del rectángulo es: ${area}`);
