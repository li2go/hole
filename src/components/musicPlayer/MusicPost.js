/**
 * Created by lanhao on 16/6/22.
 */
import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import _ from 'lodash';
import classNames from 'classnames'
export default class MusicPost extends Component {

  render() {
    var {data,isPlaying}=this.props;
    var styles = {
      avatarWrap: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'lightgray',
        position:'relative',
        textAlign:'center',
        overflow:'hidden',
        top:'-50px'
      },align:{
        position:'absolute',
        left:0,
        top:0,
        bottom:0,
        right:0,
        margin:'auto'
      }
    };
    var content;
    if (data.author) {
      content = <img className='avatar100' src={data.author.avatar.thumb} alt=""/>
    } else {
      content = <div style={styles.align}>
        ；）
      </div>
    }
    return <div className={classNames({rotate:isPlaying,'infinite':isPlaying})} style={styles.avatarWrap} onClick={this.props.onClick}>
      {content}
    </div>;

  }

}

//