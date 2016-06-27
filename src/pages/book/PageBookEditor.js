/**
 * Created by lanhao on 16/4/28.
 */
import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import _ from 'lodash';

import  BookEditor from '../../components/bookEditor/BookEditor.js'



export default class PageBookEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentWillMount(){
        console.log(this.props.params.bid)
    }
    render() {
        return <div>

            <BookEditor></BookEditor>
        </div>
    }

}