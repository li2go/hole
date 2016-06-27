import ArticleSchema from '../model/article.js'
var ArticleModel = db.model('Article',ArticleSchema);
ArticleModel.find(function(err,article){
    //查询到的所有article
});