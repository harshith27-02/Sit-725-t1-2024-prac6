
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://maddilaharshith:%23123Harsha@cluster0.u4tbl5r.mongodb.net/"

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

module.exports = client;
