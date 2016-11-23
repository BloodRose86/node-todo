// const MongoClient = require('mongodb').MongoClient;
// var user = {name: 'Andre', age: 29};
// var {name} = user;
// console.log(name);

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to the MongoDB server');

    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if(err){
            return console.log('Unable to insert todo ', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2))
    });

    db.collection('Users').insertOne({
        name: 'Andre',
        age: 29,
        location: 'Strand'
    }, (err, result) => {
        if(err){
           return console.log('Unable to enter user', err)
        }

        console.log(result.ops[0]._id.getTimestamp());
    });

    db.close();
});