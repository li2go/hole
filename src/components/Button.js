/**
 * Created by lanhao on 16/3/8.
 */
import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import _ from 'lodash';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    static buttonStyle(type) {
        var style = {
            backgroundColor: black,
            width: '20px',
        };
        switch (type) {
            case [type]:
                break;
            default:
                break;
        }
        return style
    }

    getStyle(type) {
        return this.props.style ? _.assign({}, Button.buttonStyle(type), this.props.style) : this.style;
    }

    handleClick() {
        this.props.onClick && this.props.onClick()
    }

    getContent() {
        return this.props.content ? this.props.content : ''
    }

    render() {
        return <div>
            <button style={this.getStyle()} onClick={this.handleClick.bind(this)}>{this.getContent()}</button>
        </div>
    }

}
Button.propTypes = {
    type: PropTypes.string,
    style: PropTypes.object,
    content: PropTypes.any,
    onClick: PropTypes.func
};