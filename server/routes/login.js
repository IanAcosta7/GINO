const express = require('express');
const jwt = require('jsonwebtoken');
const Database = require('../database/Database');

const db = new Database();

const app = express();

// Logueo del usuario
app.post('/login', (req, res) => {
    const auth = req.headers['authorization'];

    if (auth) {

        const data = Buffer.from(auth.split(' ')[1], 'base64').toString('binary').split(':');

        const [user, pass] = data;

        db.exists('users', {"hash": auth.split(' ')[1]})
            .then(exists => {
                if (exists) {
                    token = jwt.sign({
                        user
                    }, process.env.JWT_SEED);

                    res.setHeader('Set-Cookie', [`jwt=${token}`]);
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end();
                }
                else
                    return res.status(403).send(); // FORBIDDEN
            })
            .catch(err => console.error(err))

        // db.editTable('users', async collection => {
        //     const data = Buffer.from(auth.split(' ')[1], 'base64').toString('binary').split(':');

        //     const [user, pass] = data;

        //     await collection.findOne({"hash": auth.split(' ')[1]})
        //         .then(val => {
        //             if (val) {
        //                 token = jwt.sign({
        //                     user
        //                 }, process.env.JWT_SEED);

        //                 res.setHeader('Set-Cookie', [`jwt=${token}`]);
        //                 res.writeHead(200, { 'Content-Type': 'text/plain' });
        //                 res.end();
        //             }
        //             else
        //                 return res.status(403).send(); // FORBIDDEN 
        //         })
        //         .catch(() => {
        //             return res.status(403).send(); // FORBIDDEN TODO CHECK
        //         });
        // });

    } else {
        return res.status(401).header('WWW-Authenticate', 'Basic: Access to the staging site').send(); // UNAUTHORIZED
    }
});

module.exports = app;