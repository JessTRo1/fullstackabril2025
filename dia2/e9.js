const prompt = require('prompt-sync')();

function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

const base = Number(prompt('Introduce la base: '));
const altura = Number(prompt('Introduce la altura: '));

const area = calcularAreaTriangulo(base, altura);
console.log(`El área del triángulo rectángulo es: ${area}`);
