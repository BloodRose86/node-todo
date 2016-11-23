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

 // DeleteMany
// db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
//     console.log(result);
// });


//  deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    // console.log(result);
    // });


// findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    // console.log(result);
    // });


    // db.close();
});