require('../public/css/main.css');
require('../public/css/animate.full.css');
require('../public/css/animation.css');
// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import {Router,browserHistory} from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import configStore from './store/configStore.js'

import Routes from './Routes.js';

let store = configStore();

const history = syncHistoryWithStore(browserHistory, store);

//let unsubscribe = store.subscribe(() =>
//        console.log(store.getState())
//);
const RouterMain=<Router history={history}>{Routes}</Router>;






ReactDOM.render(
    <Provider store={store}>
        {RouterMain}
    </Provider>, document.getElementById('root'));

