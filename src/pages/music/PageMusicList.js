
import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import _ from 'lodash';

import MusicList from "../../components/music/list.js"


export default class PageMusicList extends Component {
    constructor(props) {
        super(props);
        this.player=null;
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        //
        this.setState({
            data:[]
        })
    }
    playMusic(music){
        //
        console.log(music)
    }
    handleItemClick(index){
        //checkIsPlaying

        //playIndexMusic ／ pauseMusic
        var music=this.state.data[index];
        this.playMusic(music)
    }
    render() {
        return <div>
        音乐页列表
            {/*<MusicList data={this.state.data}></MusicList>
            <MusicPlayer />*/}
        </div>
    }

}