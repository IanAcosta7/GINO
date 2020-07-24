const express = require('express');
const { verifyToken } = require('../middlewares/auth');
const path = require('path');
const app = express();

app.use(require('./login'));

// Escucha todos los métodos HTTP
app.all('/', verifyToken, (req, res) => {
    if (req.user)
        res.sendFile('index.html', {root: path.join(__dirname, '../../admin')});
    else
        res.sendFile('index.html', {root: path.join(__dirname, '../../public')});
});

module.exports = app;