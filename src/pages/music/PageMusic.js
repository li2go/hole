/**
 * Created by lanhao on 16/6/21.
 */
import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import _ from 'lodash';

export default class PageMusic extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return <div>

      {this.props.children}

    </div>
  }

}

