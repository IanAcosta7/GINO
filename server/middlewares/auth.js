const jwt = require('jsonwebtoken');

// Carga las variables de entorno en development
if (process.env.NODE_ENV !== 'production')
    require('dotenv').config();

const verifyToken = (req, res, next) => {

    if (req.header('Cookie')) {
        const cookies = req.header('Cookie').split(' ').map(cookie => cookie.split("="));
        const token = cookies.find(cookie => cookie[0] === 'jwt');

        if (token && token.length > 1) {
            jwt.verify(token[1], process.env.JWT_SEED, (err, decoded) => {
                if (!err)
                    req.user = decoded.user;
            });
        }
    }
    
    next();
};

module.exports = { verifyToken };