const prompt = require('prompt-sync')();

function handleContieneS(cadena) {
    return console.log(cadena.includes('s'));
  }

  const cadena = prompt("Texto a comprobar: "); 
  handleContieneS(cadena);