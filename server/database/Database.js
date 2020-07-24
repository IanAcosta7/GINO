const MongoClient = require('mongodb').MongoClient;

// Carga las variables de entorno en development
if (process.env.NODE_ENV !== 'production')
    require('dotenv').config();

class Database {

    constructor() {
        this.client = new MongoClient(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });

        this.connectClient();
    }

    connectClient() {
        this.client.connect(err => {
            if (err)
                console.error(err)
        });
    }

    getData(table, callback) {
        const collection = this.client.db('GINO').collection(table);

        callback(collection);
    }
}

module.exports = Database;