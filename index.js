// Importación de controladores
const usuarios = require('./controllers/usuarios');
const cursos = require('./controllers/cursos');

const express = require('express');
const mongoose = require('mongoose');

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/usuarioscursosdb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB...'))
    .catch(err => console.log('No se pudo conectar con MongoDB...', err));

// Middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoints (recursos)
app.use('/api/usuarios', usuarios);
app.use('/api/cursos', cursos);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`API REST OK, y ejecutándose en el puerto ${port}...`);
});
