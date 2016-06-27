var  MongoClient=require('mongodb').MongoClient;
var assert=require('assert');
var url='mongodb://localhost:27017/test';

MongoClient.connect(url,function(err,db){
    assert.equal(null,err);
    db.test.log.insert({"time":new Date(),"tag":"test"})

});