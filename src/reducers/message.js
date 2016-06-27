import {
    MESSAGE_ERROR,MESSAGE_FAILURE,
    MESSAGE_INFO,MESSAGE_SUCCESS
} from '../constants/message.js';

const initState = {
        isShow:false,
        message:'',
};



export default function message(state = initState, action = {}) {
    switch (action.type) {
        case MESSAGE_ERROR:
            return Object.assign({}, state, {message: action.message, isShow: true});
        case MESSAGE_FAILURE:
            return {};
        case MESSAGE_INFO:
            return {};
        case MESSAGE_SUCCESS:
            return {};
        default:
            return state;
    }
}


function setAuth(action) {


}