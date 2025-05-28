import fs from 'fs';

// Leer un archivo de texto
fs.readFile('mensaje.txt', 'utf8', (err, data) => {
    if(err) {
        console.error('Error al leer el archivo', err);
    } else {
        console.log('Contenido del archivo:');
        console.log(data);
    }
});