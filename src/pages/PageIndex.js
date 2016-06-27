/**
 * Created by lanhao on 16/4/12.
 */
import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import Tappable from 'react-tappable';
import _ from 'lodash';
import history from '../utils/history.js'
import FlatButton from 'material-ui/lib/flat-button';
import LoginForm from '../components/auth/loginForm';
import RegisterForm from '../components/auth/registerForm.js';
//import FontIcon from 'material-ui/lib/font-icon';

import Avatar from 'material-ui/lib/avatar';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import MyIndexTheme from '../const/theme/MyIndexTheme';

import {asyncLogin,login,reg,logout,showLoginForm,hideLoginForm,hideRegForm,showRegForm} from '../actions/auth.js'


const styles = {
    wrap: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        backgroundColor: 'black',
        backgroundImage: 'url(../public/img/park.jpg)',
        color: 'white'
    }, mainTitle: {
        position: '',
        fontSize: '4rem',
        fontWeight: 900,
        paddingTop: '30%',
        paddingBottom: '0.5rem',
        display: 'inline-block',
        borderBottom: 'white solid 1px'
    }, subTitle: {
        fontSize: '1rem',
        fontWeight: 900,
        display: 'block',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',

    }

};

export class PageIndex extends Component {
    constructor(props) {
        super(props);
    }

    getAvatar() {
        var style = {
            position: 'absolute',
            cursor: 'pointer',
            right: 10,
            top: 10,
            backgroundColor: 'white',
            color: 'black'
        };
        return <a onClick={()=>history.push("/user/center")}><Avatar style={style}>W</Avatar></a>
    }

    handleLoginClose = ()=> {
        this.props.dispatch(hideLoginForm())
    };
    handleRegClose = ()=> {
        this.props.dispatch(hideRegForm())
    };
    handleLoginClick = ()=> {
        this.props.dispatch(showLoginForm())
    };
    handleRegClick = ()=> {
        this.props.dispatch(showRegForm())
    };
    handleLogin = (username, password)=> {
        this.props.dispatch(asyncLogin({username, password}))
    };
    handleReg = (username, password)=> {
        this.props.dispatch(reg({username, password}))
    };

    getContent() {
        console.log(this.props);
        var content;
        if (this.props.userInfo) {
            content = <FlatButton style={{border:'1px solid white'}}
                                  linkButton={true}
                                  href={'/user/center'}
                                  label="ENTER"
                                  labelStyle={{color:'white'}}
                                  primary={true}>

            </FlatButton>
        } else {
            content = <div>
                <LoginForm
                    open={this.props.auth.loginForm.open}
                    onLoginClose={this.handleLoginClose}
                    onLogin={this.handleLogin}
                    onLoginOpen={this.handleLoginClick}
                    errMessage={this.props.auth.errMessage}
                    ></LoginForm>
                <RegisterForm
                    open={this.props.auth.regForm.open}
                    onRegClose={this.handleRegClose}
                    onRegOpen={this.handleRegClick}
                    onReg={this.handleReg}
                    ></RegisterForm>
            </div>
        }
        return content
    }

    render() {
        return <div style={styles.wrap}>
            {this.getAvatar()}
            <text style={styles.mainTitle}>{this.props.auth.isLoading ? '正在加载中！' : 'Welcome To The Hole'}</text>
            <text style={styles.subTitle}>Climb up the mountains and cross the streams，just in the hole.</text>
            {this.getContent()}
        </div>
    }

}


function mapStateToProps(state) {
    return state;
}

PageIndex.childContextTypes = {
    muiTheme: React.PropTypes.object
};
PageIndex.getChildContext = ()=> {
    return {
        muiTheme: ThemeManager.getMuiTheme(MyIndexTheme)
    }
};
PageIndex.propTypes = {};

export default connect(mapStateToProps)(PageIndex)