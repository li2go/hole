import React, { Component } from 'react';
import Head from './components/Head';
import Article from './components/Article';
import articles from './Article/articles';
import Sticky from 'react-sticky'

export default class App extends Component {
    static getArticleStyle() {
        var currentWidth;
        if (window.innerWidth > 1300) {
            currentWidth = 1000
        } else if (window.innerWidth > 800) {
            currentWidth = 800
        } else {
            currentWidth = window.innerWidth
        }
        return {
            width: currentWidth,
            height: 'auto',
            margin: '0 auto',
            paddingTop:'20px'
        }
    }

    static getHeadContent() {
        return 'What A Happy Day'
    }

    static getStickyStyle(max, i) {
        return {
            position:'fixed',
            top: 20 * i + 'px',
            left: 0 + 'px',
            right: 0 + 'px',
            zIndex: max - i,
            height:20,
            backgroundColor:getRGBARandomColor(),
            overflow:'hidden'
        }
    }

    render() {

        return (
            <div>
                <Head content={App.getHeadContent()}/>
                <div style={App.getArticleStyle()}>
                    {articles.map((article, i)=>(<Article articleId={i} key={i} data={article}/>
                    ))}
                </div>
            </div>
        );
    }
}
function getRGBARandomColor() {
    return 'rgba(' + _.random(0, 255) + ',' + _.random(0, 255) + ',' + _.random(0, 255) + ',' + _.random(0, 1, 4) + ')';
}