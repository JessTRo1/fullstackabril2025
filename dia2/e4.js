const prompt = require('prompt-sync')();

function handleSaludar(nombre) {
  console.log(`Hola ${nombre}`);
}

let nombre = prompt("Introduce tu nombre: "); 
handleSaludar(nombre);