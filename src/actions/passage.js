import * as ACTION from '../constants/passage.js';


export function add(data){
    return{
        type:ACTION.ADD_PASSAGE,
        data
    }
}
export function del(data){
    return{
        type:ACTION.DELETE_PASSAGE,
        data
    }
}

export function replay(data){
    return{
        type:ACTION.REPLAY_PASSAGE,
        data
    }
}
