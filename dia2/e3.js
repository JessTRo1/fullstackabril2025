const prompt = require('prompt-sync')();
function handleTimesTable(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
let n =parseInt(prompt("Introduce un numero: "));
handleTimesTable(n);