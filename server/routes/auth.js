const express = require('express');
const { verifyToken } = require('../middlewares/auth');
const app = express();

// Escucha todos los métodos HTTP
app.all('/auth', verifyToken, (req, res) => {
    if(req.user) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end();
    } else {
        res.setHeader('WWW-Authenticate', 'realm="Login through the website"');
        res.writeHead(401, { 'Content-Type': 'text/plain' });
        res.end();
    }
});

module.exports = app;