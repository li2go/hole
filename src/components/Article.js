/**
 * Created by lanhao on 16/2/1.
 */
import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import _ from 'lodash';
import * as styles from '../../public/css/test.css'

export default class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        var article = this.props.data;
        return <div className='article' style={{height:300,}}>
            <div className='title' id={'article_'+this.props.articleId}>
                {article.title}
            </div>

            <div className='title2'>

                <span className='auth'>{article.auth}</span>
                <span className='post'>{article.post}</span>
                <span className={'view_count'}>浏览：107{article.views}</span>
                <span className={'commit_count'}>评论：108{article.commits}</span>

            </div>

            <div className='content'>{article.content}

            </div>

        </div>
    }

}
Article.propsType = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        post: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        auth: PropTypes.string.isRequired

    })

};