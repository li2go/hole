/**
 * Created by lanhao on 16/6/8.
 */
import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import _ from 'lodash';

export default class FullDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  getWrapStyle() {

  }

  getContentWrapStyle() {

  }

  componentDidUpdate(pProps, pState) {
    if (!pState.isOpen && this.state.isOpen) {
       //通过改变dom结构实现动画
    }
  }

  handleClick(e) {
    if (this.state.isOpen) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      this.setState({
        isOpen: true
      })
    }
  }

  render() {
    return <div onClick={this.handleClick.bind(this)}
                style={this.getWrapStyle()}>
      <div style={this.getContentWrapStyle()}>
        dajiahao .wo shi heigui heigui de hei nimamaipi de gui
      </div>
    </div>
  }

}