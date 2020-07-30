const express = require('express');
const app = express();
const path = require('path');

// Pagina de logeo del admin
app.get('/articulos', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, '../../public')});
});

module.exports = app;