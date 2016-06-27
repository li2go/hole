//import Ajax from '../utils/Ajax.js';
//import article from '../configs/APIPaths/article.js';
//
////允许的操作
//export const TYPE = {
//    UPDATE: 'UPDATE',
//    ADD: 'ADD',
//    INFO: 'INFO',
//    DEL: 'DEL'
//};
//
//
//
////export function update(data, callback) {
////    Ajax(article.update.path.replace(':aid', data.aid), article.update.method, data, callback);
////}
////export function del(data, callback) {
////    Ajax(article.del.path.replace(':aid', data.aid), article.del.method, data, callback);
////}
////export function add(data, callback) {
////    Ajax(article.add.path.replace(':aid', data.aid), article.add.method, data, callback);
////}
////export function info(data, callback) {
////    Ajax(article.add.path.replace(':aid', data.aid), article.info.method, data, callback);
////}
//
//export default function (type, data, callback) {
//    Ajax(article[type].path.replace(':aid', data.aid), article[type].method, data, callback);
//}



import * as T from '../constants/article.js';

export function requestArticles(req){
    return {
        type:T.REQUEST_ARTICLES,
        req
    }
}
export function receiveArticles(resp){
    return{
        type:T.RECEIVE_ARTICLES,
        resp
    }
}