const express = require('express');
const path = require('path');
const app = express();

app.use(require('./login'));
app.use(require('./admin'));
app.use(require('./auth'));
app.use(require('./articles'));

// Escucha todos los métodos HTTP
app.all('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, '../../public')});
});

module.exports = app;