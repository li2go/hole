/**
 * Created by lanhao on 16/6/28.
 */
import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import _ from 'lodash';
import Volume from './Volume.js';
import Progress from './Progress.js';
import MusicPost from './MusicPost';
export default class ControlGroup extends Component {
  constructor(props) {
    super(props);
  }

  handleNext() {
    this.props.onChange(1)
  }

  handlePrevious() {
    this.props.onChange(-1)
  }

  handleVolumeChange(e) {
    this.props.onValumeChange(e.target.value)
  }

  render() {
    var styles = {
      pre: {},
      next: {}, play: {}
    };
    return <div className='player-control-wrap'>
      <div className='player-control-post'>

        <MusicPost data={this.props.music} isPlaying={this.props.isPlaying}/>

      </div>

      <div className='player-control-buttons'>
        <button onClick={this.props.toggleList} style={getListButtonStyle(this.props.isListShow)}>{this.props.isListShow ? '列表' : 'List'}</button>
        <button style={styles.next} onClick={this.handleNext.bind(this)}>下</button>
        <button style={styles.play} onClick={this.props.togglePlay}>{this.props.isPlaying ? '暂停' : '播放'}</button>
        <button style={styles.pre} onClick={this.handlePrevious.bind(this)}>上</button>
        <Volume value={this.props.volume}
                isMute={this.props.isMute}
                toggleMute={this.props.toggleMute}
                onChange={this.handleVolumeChange.bind(this)}/>
      </div>
      <Progress progress={this.props.progress}></Progress>

    </div>
  }
}
function getListButtonStyle(high){
  if(high){

  }else{

  }
}