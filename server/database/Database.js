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

    // editTable(table, callback) {
    //     const collection = this.client.db('GINO').collection(table);

    //     callback(collection);


    // }

    async getAll(table) {
        const collection = this.client.db('GINO').collection(table);

        let cursor = await collection.find({});

        let data = [];

        await cursor.forEach(value => data.push(value));

        return data;
    }

    async update(table, query, value) {
        const collection = this.client.db('GINO').collection(table);

        const val = await collection.updateOne(query, value, {});

        return val.modifiedCount;
    }

    async exists(table, query) {
        let exists = false;

        const collection = this.client.db('GINO').collection(table);

        const val = await collection.findOne(query);
        
        if (val) 
            exists = !exists;

        return exists;
    }
}

module.exports = Database;