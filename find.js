var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27017';
MongoClient.connect(url,function(err,client){
    assert.equal(null,err);
    const db = client.db('newpro');
    const collection = db.collection('students');
    collection.find().toArray(function(err,res){
        if(err){
            console.log(err);
        }
        else{
            console.log(res);
        }
    });
    client.close();
});