var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
const { Db } = require('mongodb');
var url = 'mongodb://localhost:27017';

MongoClient.connect(url,function(err,client){
    const db = client.db('newpro');
    assert.equal(null,err);
    console.log("DB connected successfully");
    

    var collection = db.collection('students');

    var st1={'Name':'Shri','Age':21,'Sub':['P','C','M']};
    var st2={'Name':'Shrisha','Age':21,'Sub':['P','C','M','C']};
    var st3={'Name':'Sumana','Age':21,'Sub':['P','C','M','B']};

    collection.insertMany([st1, st2, st3],function(err,res){
        if(err){
            console.log('Cannot insert');
        }
        else{
            console.log('Inserted successfully!',res.length,res);
        }
        client.close();
    })
});