// server.js
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8000 });

wss.on('connection', (ws) => {
  console.log(' Cliente conectado');

  ws.on('message', (message) => {
    const data = JSON.parse(message);
    console.log(' Mensaje recibido:', data);

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(data));
      }
    });
  });

  ws.on('close', () => console.log(' Cliente desconectado'));
});
