import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import _ from 'lodash';
import article from './article';
import passage from './passage';
import message from './message';
import auth from './auth.js';

export default combineReducers(_.assign({},{auth},{article}, {routing: routerReducer}));