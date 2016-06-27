/**
 * Created by lanhao on 16/4/11.
 */
import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import _ from 'lodash';
import ClassName from 'classnames';
import TopMenu from '../components/TopMenu.js';
import {Link} from 'react-router'
import TOP_MENU_CONFIG from '../configs/topMenuConfig.js'

export default class ComponentHead extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 0
        }
    }

    handleChange(index) {
        this.setState({
            current: index
        })
    }

    getContent() {
        var content;
        if (this.props.location.pathname==='/'||this.props.location.pathname.indexOf('/book/')>-1) {
            content=''
        } else {
            var config = TOP_MENU_CONFIG;
            content = <TopMenu onChange={this.handleChange.bind(this)}
                               current={this.state.current}
                               config={config}></TopMenu>
        }
        return content
    }

    render() {
        var CLASSNAME_HEAD = ClassName("head");
        return <div className={CLASSNAME_HEAD}>
            {this.getContent()}
        </div>
    }

}
