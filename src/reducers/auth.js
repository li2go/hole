import {
    REG,
    LOG_IN,
    LOG_OUT,
    UPDATE_TOKEN,
    REMOVE_TOKEN,
    LOAD_USER_INFO,
    LOGIN_FORM_CLOSE,
    LOGIN_FORM_OPEN,
    REG_FORM_OPEN,
    REG_FORM_CLOSE,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOADING
} from '../constants/auth.js';

import history from '../utils/history.js'
import _ from 'lodash';
const initState = {
    userInfo: {
        id: null,
        username: null,
        password: null
    },
    loginForm: {
        open: false
    },
    regForm: {
        open: false
    },
    logged: false,
    token: '',
    isLoading: false,
    failureCount: 0,
    errMessage:'',
    error: {
        code: 0,
        message: "",
        isShow: false
    }
};

const SET_AUTH = 'SET_AUTH';
const CLEAR_AUTH = 'CLEAR_AUTH';

export default function auth(state = initState, action = {}) {
    switch (action.type) {
        case LOGIN_FORM_OPEN:
            return _.assign({}, state, {loginForm: {open: true}});
        case LOGIN_FORM_CLOSE:
            return _.assign({}, state, {loginForm: {open: false}});
        case REG_FORM_OPEN:
            return _.assign({}, state, {regForm: {open: true}});
        case REG_FORM_CLOSE:
            return _.assign({}, state, {regForm: {open: false}});
        case LOADING:
            return _.assign({},state,{},{isLoading:action.isLoading});
        case LOG_IN:
            return _.assign({}, state, {userInfo: action.data, loginForm: {open: false}});
        case LOG_OUT:
            return {};
        case REG:
            return {};
        case UPDATE_TOKEN:
            return _.assign({}, state, {token: action.token});
        case LOAD_USER_INFO:
            return _.assign({}, state, {userInfo: action.data});
        case REMOVE_TOKEN:
            return _.assign({}, state, {token: null});
        case LOGIN_SUCCESS:
            return _.assign({}, state, {
                token: action.data,
                isLoading: false,
                logged:true,
                loginForm:{
                    open:false
                }
            });
        case LOGIN_FAILURE:
            return _.assign({}, state, {
                failureCount: state.failureCount + 1,
                errMessage:action.data,
                isLoading: false,
                loginForm:{
                    open:true
                }
            });
        default:
            return state;
    }
}


function setAuth(action) {
    localStroage.setItem('s', JSON.stringify(action.data))
}


export function asyncReg(action) {
    if (action.type == REG) {

    }

    return function (dispatch) {
        // Do async stuff here
        return dispatch(setAuth(action));
    }
}