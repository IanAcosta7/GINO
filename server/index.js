// Carga las variables de entorno en development
if (process.env.NODE_ENV !== 'production')
    require('dotenv').config();

const express = require('express');
const path = require('path');

const app = express();

// Se cargan todas las rutas
app.use(require('./routes'));

// Servir archivos estáticos de la carpeta public
app.use(express.static('public'));

// Inicializa el servidor en el puerto 3000
const server = app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));
