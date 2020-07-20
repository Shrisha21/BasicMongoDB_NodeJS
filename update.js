var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017';

MongoClient.connect(url,function(err,client){
    assert.equal(null,err);
    const db = client.db('newpro');

    var collection = db.collection('students');

    collection.updateOne({'Name':'Shrisha'}, {$unset: {'age':'31'}}, {multi:true}, function(err,res){
        if(err){
            console.log('cannot update');
        }
        else{
            console.log('Updated sucesssfully!');
        }
    });
    client.close();

})