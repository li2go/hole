/**
 * Created by lanhao on 16/4/12.
 */
import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import _ from 'lodash';
import history from '../utils/history.js'
import ClassName from 'classnames'
var styles={
    menuItem:{
        display:'inline-block',
        padding:'1rem',
        cursor:'pointer'
    }
};
export default class  extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    handleClick(path,index){
        this.props.onChange(index);
        history.push(path)
    }
    render() {
        var config=this.props.config;
        return <ul>
            {config.map((item,index)=>{
                return <li  className={ClassName({active:index==this.props.current})} style={styles.menuItem} key={index} onClick={this.handleClick.bind(this,item.path,index)}>{item.title}</li>
            })}
        </ul>
    }

}