import fs from 'fs';

// Crear un archivo de texto
fs.writeFile('mensaje.txt', 'Hola, este es mi primer archivo', (err) => {
    if(err) {
        console.error('Error', err);
    } else {
        console.log('Archivo creado.');
    }
});
