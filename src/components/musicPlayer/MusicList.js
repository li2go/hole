/**
 * Created by lanhao on 16/6/21.
 */
import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import _ from 'lodash';
import MusicItem from './MusicItem.js'
require('./musicList.css');

export default class MusicList extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  renderList(list) {
    return <ul style={{listStyle:'none'}}>
      {list.map((m, i)=> {
        return <li
          style={{listStyle:'none'}}
          key={i}>
          <MusicItem
            data={m}
            index={i}
            isPlaying={m.id==this.props.current.id}
            onDownload={this.props.onDownloadClick}
            onPlay={this.props.onPlayClick}
            onFavor={this.props.onFavorClick}/>
        </li>
      })}

    </ul>;
  }

  renderBlank() {
    return this.props.blankContent
  }

  render() {
    var list = this.props.list || [];

    return <div className='music-list-wrap'>
      <div className='list-head'>
        <div className='button-close' onClick={this.props.onClose}>
          <i className='iconfont icon-guanbi'></i>
        </div>
      </div>
      <div className='list-body'>

        {list.length > 0 && this.renderList(list)}
        {list.length <= 0 && this.renderBlank()}
      </div>
      <div className='list-foot'>

      </div>
    </div>
  }

}
MusicList.propTypes = {
  list: PropTypes.array,
  //当列表数据为空时的显示信息。
  blankContent: PropTypes.any,
  current: PropTypes.any,
  onClose: PropTypes.func,//关闭
  onPlayClick: PropTypes.func,
  onDownloadClick: PropTypes.func,
  onFavorClick: PropTypes.func
};