/**
 * Created by lanhao on 16/6/21.
 */
import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import _ from 'lodash';
import MusicList from './MusicList.js';
import theme from './theme.js'
import ControlGroup from './ControlGroup.js';

//console.error = function () {
//  var args = Array.prototype.slice.call(arguments);
//  var style = " text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em";
//  args.unshift(style);
//  args.unshift('%c !!!!' + '\n');
//  console.trace();
//  console.trace.apply(console, args)
//};
export default class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.audio = null;
    this.state = {
      current: {},//当前正在播放的音乐,
      listIndex: -1,
      isMusicListShow: false,
      isPlaying: false,
      musicCurrentTime: 0,//当前长度
      musicTotalTime: 0,//总时长
      volume: 50,//音量
      isMute: false,
    }
  }

  componentDidMount() {
    this.initAudio();
  }

  initAudio() {
    this.audio = document.getElementById('x-audio');
    this.setState({
      volume: this.audio.volume*100
    });
    this.audio.ontimeupdate=()=>{
      this.updateMusicInfo()
    }
  }

  updateMusicInfo(){
    this.setState({
      musicTotalTime:this.audio.duration,
      musicCurrentTime:this.audio.currentTime
    })
  }
  toggleList() {
    this.setState({
      isMusicListShow: !this.state.isMusicListShow
    })
  }

  toggleMute() {
    this.audio.muted=!this.state.isMute;
    this.setState({
      isMute: !this.state.isMute
    })
  }

  togglePlay() {
    if (!this.audio) {
      return;
    }
    if (!this.state.current.url) {
      //没有选中的，如果列表里面有则默认播放第一首音乐
      if(this.props.list){
        this.setState({
          isPlaying: true,
          current:this.props.list[0]
        }, ()=> {
          this.audio.play();
        })
      }
      return;
    }

    if (this.state.isPlaying) {
      this.setState({
        isPlaying: false
      }, ()=> {
        this.audio.pause();
      })
    } else {
     this.setState({
        isPlaying: true
      }, ()=> {
        this.audio.play();
      })
    }
  }

  handleMusicPlay(music) {
    if (music.id !== this.state.current) {
      this.setState({
        current: music,
        isPlaying: true,
        //volume: 50,
      }, ()=> {
        this.audio.play();
      })
    }
    //如果当前不是选定的 ，则播放 否则忽略
  }

  handleMusicDownload(music) {
    console.log('down:' + music)
  }

  handleMusicFavor(music) {
    console.log(music)
  }

  handleVolumeChange(value) {
    this.setState({
      volume: value
    });
    this.audio.volume = value / 100;
  }

  handleChangeMusic(control) {
    var listIndex = this.state.listIndex;
    var list = this.props.list;
    var fin = control + listIndex;
    if (fin > list.length - 1) {
      console.log('下面没了');
      return;
    } else if (fin < 0) {
      console.log('前面没了');
      return;
    } else {
      this.setState({
        listIndex: this.state.listIndex + control
      }, ()=> {
        this.setState({
          current: this.props.list[this.state.listIndex]
        })
      });
    }

  }

  getMusicURL() {
    if (this.state.current.id) {
      return this.state.current.url
    } else {
      return ''
    }
  }

  getCurrentProgress() {
    return {
      total: this.state.musicTotalTime,
      current: this.state.musicCurrentTime
    }
  }

  render() {
    return <div>
      {this.state.isMusicListShow && <MusicList
        list={this.props.list}
        onClose={()=>{this.setState({isMusicListShow:false})}}
        //当列表数据为空时的显示信息。
        blankContent={<div>没有音乐</div>}
        current={this.state.current}
        onPlayClick={this.handleMusicPlay.bind(this)}
        onDownloadClick={this.handleMusicDownload.bind(this)}
        onFavorClick={this.handleMusicFavor.bind(this)}
        />}

      <ControlGroup
        toggleList={this.toggleList.bind(this)}
        isListShow={this.state.isMusicListShow}
        togglePlay={this.togglePlay.bind(this)}
        isPlaying={this.state.isPlaying}
        toggleMute={this.toggleMute.bind(this)}
        isMute={this.state.isMute}
        music={this.state.current}
        onChange={this.handleChangeMusic.bind(this)}
        onValumeChange={this.handleVolumeChange.bind(this)}
        progress={this.getCurrentProgress()}
        volume={this.state.volume}
        />
      <audio id={'x-audio'}
             src={this.getMusicURL()}></audio>
    </div>
  }

}


function update(audio,handle){
  audio.canPlayThrough=function(){
    handle()
  }
}
//当可以开始播放的时候