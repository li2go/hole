/**
 * Created by lanhao on 16/4/28.
 */
import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import _ from 'lodash';

export default class PhotoResourceList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const mark={
            width:'200px',
            backgroundColor:'red',
            height:'100%',
            position:'relative'
        };
        return <div style={mark}>
        图片资源列表

        </div>
    }

}