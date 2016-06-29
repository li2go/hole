/**
 * Created by lanhao on 16/6/21.
 */
import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import _ from 'lodash';
import theme from './theme.js';

function formatIndex(index) {
  return index
}
export default class MusicItem extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  handleAuthorClick() {
    if (this.props.onAuthorClick) {
      this.props.onAuthorClick(this.props.data.author)
    } else {
      console.log(this.props.data.author)
    }
  }

  handleAlbumClick() {
    if (this.props.onAlbumClick) {
      this.props.onAlbumClick(this.props.data.album)
    } else {
      console.log(this.props.data.album)
    }
  }
  handlePlay(){
    this.props.onPlay(this.props.data)
  }
  handleDownload(){
    this.props.onDownload(this.props.data)
  }
  handleFavor(){
    this.props.onFavor(this.props.data)
  }
  render() {
    var styles = {
      wrap: (isPlaying)=> {
        return {
          display: 'inline-block',
          fontSize: '12px',
          lineHeight: '12px',
          backgroundColor: isPlaying ? 'lightgray':'rgba(122,122,122,0.3)'
        }
      }
    };
    var {data,index,isPlaying}=this.props;
    return <div className='music-list-item' onDoubleClick={this.handlePlay.bind(this)}
                style={styles.wrap(isPlaying)}>
      <span className='index'>{formatIndex(index)}</span>
      {getFavorIcon(data.isFavor, this.handleFavor.bind(this))}
      <span className='download' onClick={this.handleDownload.bind(this)} >下载</span>
      <span className='title'>{data.title}</span>
      <span className='author'  onClick={this.handleAuthorClick.bind(this)} >{data.author.name || '未知'}</span>
      <span className='album' onClick={this.handleAlbumClick.bind(this)}>{data.album.name || '未知'}</span>
      <span className='hot' >{hot(data.hot)}</span>
    </div>
  }

}
MusicItem.propTypes = {
  data: PropTypes.object,
  isPlaying: PropTypes.bool,
  onPlay: PropTypes.func,
  onFavor: PropTypes.func,
  onDownload: PropTypes.func,
  index: PropTypes.number,
};



function getFavorIcon(isf, onClick) {
  var styles = {
    favorWrap: {
      display: 'inline-block'
    }, favor: {
      color: isf ? 'red' : 'gray'
    }
  };
  var cls=isf ?'iconfont icon-yishoucang':'iconfont icon-shoucang';

  return <span
    onClick={onClick}
    calssName='favor'
    style={styles.favorWrap}>
    <i className={cls}
       style={styles.favor}>
    </i>
  </span>
}

function hot(value, max) {
  max = max || 100;
  var styles = {
    wrap:{position:'relative',width:'100%',height:'4px',borderRadius:'2px',backgroundColor:'gray'},
    value:{position:'absolute',width:parseInt(value/max*100)+'%',height:'4px',borderRadius:'2px',backgroundColor:'lightcyan'}
  };
  return <div style={styles.wrap}>
    <div style={styles.value}></div>
  </div>
}