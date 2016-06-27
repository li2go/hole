

import * as auth from '../constants/auth.js'
import thunk from 'redux-thunk';
import Request,{STATUS_SUCCESS} from './request.js';
import * as PATH from './API.js'
//其它常量

//action
export function login(data) {
    return {type: auth.LOG_IN, data};
}


export function asyncLogin(username, password) {
    return (dispatch)=> {
        //if (anyElementsEmpty({username, password})) {
        //    dispatch(loginFailure('账号密码信息不完整'));
        //    return;
        //}
        dispatch(loading(true));
        dispatch(hideLoginForm());
        Request(PATH.LOGIN,{username, password},(err,data)=>{
            if(!err&&data.status==STATUS_SUCCESS){
                dispatch(loading(false));
                dispatch(loginSuccess(data.datas))
            }else{
                dispatch(loading(false));
                dispatch(loginFailure(err.message))
            }
        })

    }
}

export function loading(isLoading){
    return {type: auth.LOADING, isLoading}
}
export function logout(data) {
    return {type: auth.LOG_OUT, data}
}

export function reg(data) {
    return {type: auth.REG, data}
}

export function showLoginForm() {
    return {type: auth.LOGIN_FORM_OPEN}
}

export function hideLoginForm() {
    return {type: auth.LOGIN_FORM_CLOSE}
}

export function showRegForm() {
    return {type: auth.REG_FORM_OPEN}
}

export function hideRegForm() {
    return {type: auth.REG_FORM_CLOSE}
}



export function loginSuccess(userInfo){
    return {type:auth.LOGIN_SUCEESSS,data:userInfo}
}
export function loginFailure(err){
    return {type:auth.LOGIN_FAILURE,data:err}
}


/**
 * Checks if any elements of a JSON object are empty
 * @param  {object} elements The object that should be checked
 * @return {boolean}         True if there are empty elements, false if there aren't
 */
function anyElementsEmpty(els) {
    for (let el in els) {
        if (!els[el]) {
            return true;
        }
    }
    return false;
}

function requestFailed(action) {

}

function showLoading(isShow) {
    return {
        type: "",
        message: "Now is Loading,please wait a moment"
    }
}



//thunkAction

