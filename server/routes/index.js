const express = require('express');
const path = require('path');
const { verifyToken } = require('../middlewares/auth');
const app = express();
const Database = require('../database/Database');

const db = new Database();

app.use(require('./login'));
app.use(require('./admin'));
app.use(require('./auth'));
app.use(require('./articles'));

app.use(express.json());

// Escucha todos los métodos HTTP
app.all('/', (req, res) => {
    res.sendFile('index.html', {root: path.join(__dirname, '../../public')});
});

app.get('/get_content', (req, res) => {
    const data = db.getAll('pageContent')
        .then(data => {
            if (data) {
                let jsonRes = {};

                for (let i = 0; i < data.length; i++) {
                    jsonRes[data[i].name] = data[i].value
                }

                return res.json(jsonRes);
            } else 
                throw new Error('There is no data in the Database')
        })
        .catch(err => {
            console.error(err);
            sendStatus(500);
        });
});

app.post('/edit_content', verifyToken, (req, res) => {
    if (req.user) {
        if (req.body) {
            let notModified = false

            Object.keys(req.body).forEach(objName => {
                db.update('pageContent', {"name": objName}, {$set:{value: req.body[objName]}})
                    .then(mod => {
                        if (mod < 0)
                            notModified = true;
                    })
                    .catch(err => {
                        console.error(err);
                        res.sendStatus(500);
                    });
            });

            notModified ? res.sendStatus(204) : res.sendStatus(200);
        }
            
    }
});

module.exports = app;