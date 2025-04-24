const prompt = require('prompt-sync')();

function mostrarSerieFibonacci() {
    const cantidad = 10;
    let fibonacci = [0, 1];

    for (let i = 2; i < cantidad; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    console.log("Los primeros 10 números de la serie de Fibonacci son: ");
    console.log(fibonacci.join(", "));
}

mostrarSerieFibonacci();