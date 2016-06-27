/**
 * Created by lanhao on 16/4/12.
 */
import React,{ Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Tappable from 'react-tappable';
import _ from 'lodash';

export default class MusicList extends Component {
    constructor(props) {
        super(props);
        this.player=null;
        this.state = {
            playing:null
        }
    }

    render() {
        return <div>
        音乐列表
            <Audio ref={(component)=>{this.player=ReactDOM.findDOMNode(component)}}/>
        </div>
    }

}


class MusicItem extends Component{
    render(){
        var data=this.props.data||{};
        var index=this.props.index;
        return <div>
            {index}
            <a href="">{data.name}</a>
            <button>{data.isPlaying?'X':'O'}</button>
        </div>
    }
}