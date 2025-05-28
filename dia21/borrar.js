import fs from 'fs';

// Borrar un archivo de texto

fs.unlink('mensaje.txt', (err) => {
    if(err) {
        console.error('Error al borrar el archivo', err);
    } else {
        console.log('Archivo borrado.');
    }
});