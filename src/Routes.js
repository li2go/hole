import { Router, Route, Link,Redirect,IndexRoute } from 'react-router';
import React,{Component} from 'react';

import {connect} from 'react-redux'

import ComponentUITest from '../src/pages/ComponentUITest.js'
import Main from '../src/pages/Main.js'

import PageIndex from '../src/pages/PageIndex.js'

import PageBookEditor from '../src/pages/book/PageBookEditor.js'

import PageReg from '../src/pages/auth/PageReg.js';
import PageAbout from '../src/pages/about';
//user
import PageUserIndex from '../src/pages/user/PageUserIndex.js'

import PageUserInfo from '../src/pages/user/PageUserInfo.js';
//import PageUserIndex from '../src/pages/user/PageUserIndex.js';
import PageUserList from '../src/pages/user/PageUserList.js';
import PageUserMusicList from '../src/pages/user/PageUserMusicList.js';
import PageUserPassage from '../src/pages/user/PageUserPassage.js';

//article
import PageArticleDetail from '../src/pages/article/PageArticleDetail';
import PageArticleList from '../src/pages/article/PageArticleList';
import PageArticlesHot from '../src/pages/article/PageArticlesHot.js';
import PageArticlesIndex from '../src/pages/article/PageArticlesIndex.js';
//music
import PageMusic from '../src/pages/music/PageMusic'
import PageMusicIndex from '../src/pages/music/PageMusicIndex';
import PageMusicHot from '../src/pages/music/PageMusicHot';


import PageMusicList from '../src/pages/music/PageMusicList';
import PageMusicDetail from '../src/pages/music/PageMusicDetail';

class NoMatch extends Component {
    render() {
        return <div>not Found</div>
    }
}

var routes = <Route path="/" component={Main}>
    <IndexRoute component={PageIndex}/>
    <Route path={'test'}>
        <Route path="ui" component={ComponentUITest}/>
    </Route>
    <Route path="about" component={PageAbout}/>
    <Redirect from='article' to='article/hot'/>
    <Route path='book/:bid' component={PageBookEditor}></Route>
    <Route path="article" component={PageArticlesIndex}>
        <Route path="hot" component={PageArticlesHot}/>
        <Route path="list" component={PageArticleList}/>
        <Route path=":aid" component={PageArticleDetail}/>
    </Route>


    <Redirect from='music' to='music/index'/>
    <Route path="music" component={PageMusic}>
        <Route path="index" component={PageMusicIndex}/>
        <Route path="hot" component={PageMusicHot}/>
        <Route path=":mid" component={PageMusicDetail}/>
    </Route>

    <Route path="user">
        <Route path="center" component={PageUserIndex}/>
        <Route path="info/:uid" component={PageUserInfo}/>
        <Route path=":uid/music" component={PageArticlesHot}/>
        <Route path=":uid/article/:aid" component={PageMusicDetail}/>
        <Route path=":uid/article" component={PageMusicDetail}/>
    </Route>
    <Route path="profile">
        <Route path="info/:uid" component={PageUserInfo}/>
        <Route path=":uid/music" component={PageArticlesHot}/>
        <Route path=":uid/article/:aid" component={PageMusicDetail}/>
        <Route path=":uid/article" component={PageMusicDetail}/>
    </Route>
    <Route path="auth">
        <Route path="reg" component={PageReg}/>
    </Route>

    <Route path="*" component={NoMatch}/>
</Route>;


export default routes
