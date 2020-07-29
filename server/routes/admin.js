const express = require('express');
const { verifyToken } = require('../middlewares/auth');
const app = express();
const path = require('path');

// Pagina de logeo del admin
app.get('/admin', verifyToken, (req, res) => {
    if (req.user)
        res.redirect('/');
    else
        res.sendFile('index.html', {root: path.join(__dirname, '../../public')});
});

module.exports = app;