/**
 * Created by lanhao on 16/4/12.
 */
import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import _ from 'lodash';


import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';



export default class RegisterForm extends Component {
    constructor(props) {
        super(props);
    }

    handleOpen = () => {
       this.props.onRegOpen()
    };

    handleClose = () => {
        this.props.onRegClose()
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                secondary={true}
                onTouchTap={this.handleClose}
                />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
                />
        ];
        return <span>
            <FlatButton style={{border:'1px solid white',marginLeft:'1rem'}}
                        onClick={this.handleOpen}
                        label="Reg"
                        labelStyle={{color:'white'}}
                        primary={true}>
            </FlatButton>
            <Dialog
                title="reg"
                actions={actions}
                modal={false}
                open={this.props.open}
                onRequestClose={this.handleClose}
                >
                <div>dasdas</div>
            </Dialog>
        </span>
    }

}