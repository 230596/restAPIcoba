const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/datafix',{ useNewUrlParser: true });
const db = mongoose.connection;


db.on('error',() => console.log('database eror'));
db.once('open',() => console.log('connected'));

let crudSchema = mongoose.Schema({
    nama : String,
    lat : Number,
    long : Number
});

exports.crud = mongoose.model('crud',crudSchema);