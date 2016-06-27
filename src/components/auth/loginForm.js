/**
 * Created by lanhao on 16/4/12.
 */
import React, { Component, PropTypes } from 'react';
import {findDOMNode} from 'react-dom';
import Tappable from 'react-tappable';
import _ from 'lodash';


import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';


const MAX_LENGTH_USERNAME = 16;
const MAX_LENGTH_PASSWORD = 16;

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.username=null;
        this.password=null;
    }

    handleOpen = () => {
        this.props.onLoginOpen();
    };

    handleClose = () => {
        this.props.onLoginClose();
    };
    handleSubmit = ()=> {
        const username = this.username.children[2].value;
        const password=this.password.children[2].value;
        this.props.onLogin(username.trim(), password.trim());

    };

    //handleChange(type, event) {
    //    console.log(event.target.value);
    //    this.setState({
    //        [type + 'Value']: event.target.value
    //    });
    //}

    render() {
        const actions = [
            //<FlatButton
            //    label="Cancel"
            //    secondary={true}
            //    onTouchTap={this.handleClose}
            //    />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleSubmit}
                />
        ];
        return <span>
            <FlatButton style={{border:'1px solid white',marginRight:'1rem'}}
                        onClick={this.handleOpen}
                        label="Login"
                        labelStyle={{color:'white'}}
                        primary={true}>

            </FlatButton>
            <Dialog
                title="Login"
                actions={actions}
                contentStyle={{width:'300px',position:'absolute',left:0,right:0,top:'30%'}}
                modal={false}
                open={this.props.open}
                onRequestClose={this.handleClose}
                >
                <TextField
                    ref={(component)=>{this.username=findDOMNode(component)}}
                    errorText={this.props.error}
                    maxLength={MAX_LENGTH_USERNAME}
                    //onChange={this.handleChange.bind(this,'username')}
                    //value={this.state.usernameValue}
                    hintText="Username Field"
                    floatingLabelText="input the Username"
                    /><br/>
                <TextField
                    ref={(component)=>{this.password=findDOMNode(component)}}
                    //onChange={this.handleChange.bind(this,'password')}
                    maxLength={MAX_LENGTH_PASSWORD}
                    //value={this.state.passwordValue}
                    errorText={this.props.error}
                    hintText="Password Field"
                    floatingLabelText="input the Password"
                    onEnterKeyDown={this.handleSubmit}
                    type="password"
                    />
                <span>{this.props.errMessage}</span>
            </Dialog>
        </span>
    }

}


LoginForm.propTypes={
    onSubmitClick:PropTypes.func
};