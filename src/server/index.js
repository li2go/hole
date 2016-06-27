var app = require('koa')();
var router = require('koa-router')();
var MongoClient = require("mongodb").MongoClient;


var bodyParser = require('koa-body-parser');
router
  //.get('/', function *(next) {
  //    console.log(this);
  //    this.body = 'Hello 2go!';
  //    yield next
  //})
  .post('/users', function *(next) {
    console.log("start", this.request.body);

    //var result = yield collection.find({}).toArray();
    var result = yield User.find({}).toArray();
    db.close();
    yield next;
    //this.response.header
    this.response.body = result;
    db.close();

  })
  .post('/login', function *(next) {
      console.log(this.request.body);
    yield next
  })
  .post('/users/:id', function *(next) {
    var uid = this.params.id;
    var db = yield MongoClient.connect('mongodb://127.0.0.1:27017/test');
    var User = db.collection("log");
    yield User.insertOne({uid, time: new Date().getTime});
    yield next
  })
  .put('/users/:id', function *(next) {

    console.log(this);
    yield next

  })
  .del('/users/:id', function *(next) {
    console.log(this);
    yield next

  });
app.use(bodyParser());


app
  .use(router.routes())
  .use(router.allowedMethods());
//app.use(function *(){
//    var db = yield MongoClient.connect('mongodb://127.0.0.1:27017/test');
//    var collection = db.collection('user');
//    var result = yield collection.find({}).toArray();
//    console.log(result);
//    db.close()
//});


app.listen(3009, function () {
  console.log('3009')
});