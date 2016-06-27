/**
 * Created by lanhao on 16/4/12.
 */
import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import _ from 'lodash';
import connect from 'react-redux'

import MusicPlayer from '../components/musicPlayer/index.js';
import listData from '../components/musicPlayer/listData.js';

import ComponentHead from '../components/ComponentHead.js';
import ComponentFoot from '../components/ComponentFoot.js';


class Main extends Component {
  componentDidMount() {
  }

  render() {
    if (this.props.location.pathname.indexOf('test') > -1) {
      return <div>{this.props.children}</div>
    }

    return (
      <div>
        <ComponentHead location={this.props.location} userInfo={{}}></ComponentHead>

        <div style={{textAlign:'center'}}>{this.props.children}</div>
        <div style={{position:'fixed',bottom:'0px',left:'0px',zIndex:9999,backgroundColor:'black',width:'100%'}}>
          <MusicPlayer list={listData}/>
        </div>
        <ComponentFoot></ComponentFoot>
      </div>
    );
  }

}
export default Main;
//export default connect(state=>state)(Main);

