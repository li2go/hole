
import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import _ from 'lodash';
import {detail as ArticlePropTypes} from '../../const/proptypes/article.js'
export default class  ArticleDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <div>
        文章详情

        </div>
    }

}
ArticleDetail.propTypes=ArticlePropTypes;