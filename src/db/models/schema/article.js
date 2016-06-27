//Schema、Model、Entity的关系请牢记，
//Schema生成Model，Model创造Entity，
//Model和Entity都可对数据库操作造成影响，
//但Model比Entity更具操作性。

var mongoose = require('mongoose');    //引用mongoose模块
var ObjectId = mongoose.Schema.Types.ObjectId;

var ArticleSchema=new mongoose.Schema({
    title:String,
    createdAt:Date,
    id:ObjectId,
    content:String,

});

ArticleSchema.methods.speak = function(){
    console.log('名字是'+this.title);
};
ArticleSchema.methods.update=function update(){

};
export {ArticleSchema}