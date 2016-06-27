/**
 * Created by lanhao on 16/3/8.
 */
//测试页面的主页
import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import _ from 'lodash';

import Button from '../components/Button.js'


export default class TestIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <div>

    <Button></Button>
        </div>
    }

}