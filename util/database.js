const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;
const mongoConnect = callback => {
    MongoClient.connect('mongodb+srv://eduin:WGxuT0br08jxckDr@cluster0.mhoqp.mongodb.net/shopee?retryWrites=true&w=majority')
        .then(client => {
            console.log('Connected');
            //store db connection in the _db variable
            _db = client.db();
            callback();
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No database found';
};

exports.MongoConnect = mongoConnect;
exports.getDb = getDb;
