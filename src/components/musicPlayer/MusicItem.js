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
      },
      index: {color: 'gray', display: 'inline-block', width: '60px'},
      download: {width:'40px',display: 'inline-block',cursor:'pointer'},
      title: {width: '200px', overflow: 'hidden',display: 'inline-block',whiteSpace:'nowrap',textOverflow:'ellipsis',cursor:'pointer'},
      hot:{width:'100px',display:'inline-block'},
      author:{width:'100px',display: 'inline-block',cursor:'pointer'},
      album:{width:'100px',display: 'inline-block',cursor:'pointer'}
    };
    var {data,index,isPlaying}=this.props;
    return <div onDoubleClick={this.handlePlay.bind(this)}
                style={styles.wrap(isPlaying)}>
      <span style={styles.index}>{formatIndex(index)}</span>
      {getFavorIcon(data.isFavor, this.handleFavor.bind(this))}
      <span onClick={this.handleDownload.bind(this)} style={styles.download}>下载</span>
      <span style={styles.title}>{data.title}</span>
      <span onClick={this.handleAuthorClick.bind(this)} style={styles.author}>{data.author.name || '未知'}</span>
      <span onClick={this.handleAlbumClick.bind(this)} style={styles.album}>{data.album.name || '未知'}</span>
      <span style={styles.hot}>{hot(data.hot)}</span>
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
      backgroundColor: isf ? 'red' : 'gray'
    }
  };
  return <span
    onClick={onClick}
    style={styles.favorWrap}>
    <i style={styles.favor}>心</i>
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