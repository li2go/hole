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
        const style = {
            height: '60px',
            bottom: 0,
            left: 0,
            width:'100%',
            textAlign:'center',
            paddingTop:'2rem'
        };
        return <div className={'foot'} style={style}>

            我是个脚部
        </div>
    }

}