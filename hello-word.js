const http = require('http');

const hostname = '127.0.0.1';
const port = 3000; // Cambiado de 300 a 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, world!\n');
});

// El siguiente bloque inicia el servidor
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
Page 10 of 71
Luego actualice los cambios en el repositorio local
git commit -a -m ‘nodemon instalado