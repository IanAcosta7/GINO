const express = require('express');
const jwt = require('jsonwebtoken');
const Database = require('../database/Database');

const db = new Database();

const app = express();

// Logueo del usuario
app.post('/login', (req, res) => {
    const auth = req.headers['authorization'];

    if (auth) {

        db.getData('users', collection => {
            const data = Buffer.from(auth.split(' ')[1], 'base64').toString('binary').split(':');

            const [user, pass] = data;

            collection.findOne({"hash": auth.split(' ')[1]})
                .then(val => {
                    if (val) {
                        token = jwt.sign({
                            user
                        }, process.env.JWT_SEED);
                        return res.status(200).send({ token }); // OK
                    }
                    else
                        return res.status(403).send(); // FORBIDDEN 
                })
                .catch(() => {
                    return res.status(403).send(); // FORBIDDEN TODO CHECK
                });
        });

    } else {
        return res.status(401).header('WWW-Authenticate', 'Basic: Access to the staging site').send(); // UNAUTHORIZED
    }
});

module.exports = app;