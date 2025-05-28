import http from 'http';

const servidor = http.createServer((req, res) => {
    res.statusCode = 200;                               // CÓDIGO DE ESTADO 200
    res.setHeader('Content-Type', 'text/plain');        // CABECERA DE TIPO DE CONTENIDO
    res.end('¡Hola, Mundo!');                           // RESPUESTA DEL SERVIDOR
});

const puerto = 3000;                                                   // PUERTO DEL SERVIDOR
servidor.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}/`);  // MENSAJE DE INICIO DEL SERVIDOR
});