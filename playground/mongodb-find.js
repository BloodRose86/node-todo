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

    db.collection('Users').find({name: 'Andre'}).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));

    }, (err) =>{

        console.log('Unable to get todos', err);     
    });


    // db.close();
});