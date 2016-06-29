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
    return <div className='player-control-wrap'>
      <div className='player-control-post'>

        <MusicPost data={this.props.music} isPlaying={this.props.isPlaying}/>

      </div>

      <div className='player-control-buttons'>
        <button className='player-control button-prev'
                onClick={this.handlePrevious.bind(this)}>
          <i className='iconfont icon-mediaprevious'></i>
        </button>

        <button className='player-control' onClick={this.props.togglePlay}>

          {this.props.isPlaying
            ? <i className='iconfont icon-mediapause'></i>
            : <i className='iconfont icon-mediapause'></i>}

        </button>
        <button className='player-control button-next'
                onClick={this.handleNext.bind(this)}>
          <i  className='iconfont icon-medianext'></i>
        </button>
        <Progress progress={this.props.progress}></Progress>
        <Volume value={this.props.volume}
                isMute={this.props.isMute}
                toggleMute={this.props.toggleMute}
                onChange={this.handleVolumeChange.bind(this)}/>
        <button className='player-control button-list' onClick={this.props.toggleList}>{getListButton(this.props.isListShow)}</button>

      </div>

    </div>
  }
}
function getListButton(high) {
  if (high) {
    return <i className='iconfont icon-alignjustify'></i>
  } else {
    return <i className='iconfont icon-alignjustify'></i>
  }
}