import {createStore, compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistState} from 'redux-devtools';
import rootReducer from '../reducers/index';
import createLogger from 'redux-logger';
import promise from 'redux-promise';




//import DevTools from '../containers/DevTools';

//const createStoreWithMiddleware = compose(
//    DevTools.instrument(),
//    persistState(getDebugSessionKey())
//)(createStore);

function getDebugSessionKey() {
    const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);

    return (matches && matches.length > 0) ? matches[1] : null;
}
const logger = createLogger();
const middleware = [thunk, promise, logger];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export default function configStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    //const store = createStore(rootReducer, applyMiddleware(thunk));

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers/index').default;

            store.replaceReducer(nextReducer);
        });
    }

    return store;
}
