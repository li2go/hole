import ArticleModel from '../model/article.js';
var ArticleEntity=new ArticleModel({
    title:'how2use this page',
    createdAt:new Date(),
    id:0,
    content:'this is a page strange,without mark beautiful.',
});

//ArticleEntity.save()