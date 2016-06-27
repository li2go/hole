/**
 * Created by lanhao on 16/4/11.
 */
import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import _ from 'lodash';

export class PageArticlesIndex extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
    }
    render() {
        return <div>
            {this.props.children}
        </div>
    }
}

PageArticlesIndex.propTypes={};

function mapStateToPropsArticle(state) {
    return state;
    //return state.article;
}

export default PageArticlesIndex;

//export default connect(mapStateToPropsArticle)(PageArticlesIndex);
