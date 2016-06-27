import * as A from '../actions/article.js';
import * as T from '../constants/article.js';

import fetch from 'whatwg-fetch'
import history from '../utils/history.js'
import _ from 'lodash';


const initState = {
    articles: {
        datas: {},
        count: 0,
        isFetching: false,
        lastUpdate: 0,
        didInvalidate: true
    }
};


export default function article(state = initState, action = {}) {
    switch (action.type) {
        case T.REQUEST_ARTICLES:
            if (shouldFetchPosts(state)) {
                return state
            } else {
                return function (dispatch) {
                    var data = {isFetching: false, datas: {}, count: 3, timestamp: 1002};
                    return dispatch({type: T.RECEIVE_ARTICLES, data})
                };
            }
        //return _.assign({}, state, {lastUpdate:new Date().getTime(),articles:action.articles});
        case T.RECEIVE_ARTICLES:
            return _.assign({}, state, {articles: {data: action.resp}, lastUpdate: action.resp.timestamp});
        default:
            return state;
    }
}




//判断是否要从服务器抓取最新的data
function shouldFetchPosts(state) {
    const articles = state.articles;
    if (!articles.count) {
        return true
    } else if (articles.isFetching) {
        return false
    } else {
        return articles.didInvalidate
    }
}


function fetchArticles(req) {
    return dispatch => {
        dispatch(requestPosts(data));
        var option = {
            headers: {"X-Auth-token": req.token},
            payload: req.data
        };
        return fetch(`http://localhost:3004/articles/`, option).then(response => response.json())
            .then(json => dispatch(A.receiveArticles(json)))
    }
}


function testFetchData(req){
    return dispatch=>{
        dispatch(requestArticles(req));
        var option={
            header:{"X-auth-token":'xczx'},
            payload:{"id":2}
        };
        return fetch('http://182.92.85.186/api/c/h5/template/list',option).then(response=>response.json())
            .then(json=>dispatch(A.receiveArticles(json)))

    }
}