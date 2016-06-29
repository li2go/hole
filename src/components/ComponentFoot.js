/**
 * Created by lanhao on 16/4/12.
 */
import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import _ from 'lodash';

export default class ComponentFoot extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <div className={'foot'}>

            我是个脚部
        </div>
    }

}