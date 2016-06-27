import  { PropTypes } from 'react';
//import comment from './comment.js'

var list = {
    data: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        createTime: PropTypes.number,
        url: PropTypes.string,
        mid:PropTypes.number,
    }))
};
var detail = PropTypes.shape({
    title: PropTypes.string,
    createTime: PropTypes.number,//timeStamp
    url: PropTypes.string
});

export {list,detail}