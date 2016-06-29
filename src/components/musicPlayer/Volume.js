/**
 * Created by lanhao on 16/6/28.
 */
import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

export default class Volume extends Component {
  render() {
    return <div className='player-control-volume'>
      <div className='player-button-mute-1'
           onClick={this.props.toggleMute}>
        {this.props.isMute
          ? <i style={{fontSize:35}} className='iconfont icon-off'></i>
          : <i style={{fontSize:35}} className='iconfont icon-on'/>
        }
      </div>
      <input type="range"
             name="volume"
             step="1"
             min="1"
             onChange={this.props.onChange}
             value={this.props.value}
             max="100"/>
      {this.props.value}
    </div>
  }
}
Volume.propTypes = {
  value: PropTypes.any,
  isMute: PropTypes.bool,
  onChange: PropTypes.func,
  toggleMute: PropTypes.func
};