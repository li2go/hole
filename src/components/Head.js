/**
 * Created by lanhao on 16/3/5.
 */
import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import _ from 'lodash';
import Sticky from 'react-sticky'
function getRGBARandomColor() {
    return 'rgba(' + _.random(0, 255) + ',' + _.random(0, 255) + ',' + _.random(0, 255) + ',' + _.random(0, 1, 4) + ')';
}
export default class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    static getStyle() {
        return {
            backgroundColor: getRGBARandomColor(),
            //WebkitMaskImage:'radial-gradient(rgba(0, 0, 0, 1),rgba(0, 0, 0, 1),rgba(0, 0, 0, 0.2))',
            height: (window.innerHeight > 900) ? 300 : 200
        }
    }
    static getStickStyle(){
        return {
            position:'fixed',
            top: 0+ 'px',
            left: 0 + 'px',
            right: 0 + 'px',
            zIndex: 1,
            height:50,
            backgroundColor:getRGBARandomColor(),
            overflow:'hidden'
        }
    }
    static getTitleStyle() {
        return {
            height: 50,
            fontSize: 50,
            lineHeight:50+'px',
            color: 'white',
        }
    }

    render() {
        return <div className='head' style={Head.getStyle()}>
                    <Sticky stickyStyle={Head.getStickStyle()} topOffset={Head.getStyle().height}>
                    <div className='title' style={Head.getTitleStyle()}>
                    Pardon Me
                    </div>
                </Sticky>
        </div>

    }

}