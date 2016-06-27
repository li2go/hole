/**
 * Created by lanhao on 16/4/28.
 */
import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import _ from 'lodash';


import ToolBar from './ToolBar.js'
import PhotoResourceList from './PhotoResourceList'

export default class BookEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <div>
            <ToolBar></ToolBar>
            <PhotoResourceList></PhotoResourceList>

        </div>
    }

}