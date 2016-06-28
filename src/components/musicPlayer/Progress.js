/**
 * Created by lanhao on 16/6/28.
 */
import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import _ from 'lodash';

export default class Progress extends Component {

  render() {
    var {total,current}=this.props.progress;
    var percent = (current / total * 100) + '%';
    var totalTime = getTime(parseInt(total));
    return <div className='player-control-progress'>
      <span style={{fontSize:'10px'}}>
        {totalTime}
      </span>
      <div className='player-control-progress-line-wrap'>
        <div style={{transition:'width 0.3s',backgroundColor:'gray',height:2,width:percent,display:'inline-block'}}></div>
        <div className='player-control-progress-line-p' style={{position:'absolute',left:percent}}></div>
      </div>
    </div>
  }
}

function getTime(seconds) {
  var mt = parseInt(seconds / 60);
  var ht = parseInt(mt / 60);
  var m = mt % 60;
  var s = seconds % 60;
  if (m < 10) {
    m = '0' + m
  }
  if (s < 10) {
    s = '0' + s
  }
  return ht + ':' + m + ':' + s
}