var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017';

MongoClient.connect(url,function(err,client){
    assert.equal(null,err);
    const db = client.db('newpro');
    const collection = db.collection('students');
    collection.remove({Name:'Shri'},function(err,res){
        if(err){
            console.log(err);
        }
        else{
            console.log('Deleted');
        }
    });
    client.close();
});