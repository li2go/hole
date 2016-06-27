/**
 * Created by lanhao on 16/4/11.
 */
import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import _ from 'lodash';
//import wg from '../../db/wg.js';



function isVilified(oj){
    return true
}
export default class PageReg extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    reg(req){
        wg.update(JSON.stringify(req))
    }
    handleRegClick(){
        var username=this.refs.username.getValue();
        var password=this.refs.password.getValue();
        if(isVilified({username,password})){
            console.log('ok')
        }
    }
    render() {
        return <div>
            <input ref="username" type="text" maxLength={16}/>
            <input ref="password" type="password" maxLength={16}/>
            <button onClick={this.handleRegClick.bind(this)}>REG</button>
        </div>
    }

}