/**
 * Created by lanhao on 16/4/12.
 */
import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import _ from 'lodash';

export default class PageLabelMusics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading:true
        }
    }
    componentDidMount(){

    }
    render() {
        return <div>
        ：lid对应标签的用户
        </div>
    }

}