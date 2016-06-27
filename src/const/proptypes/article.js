import  { PropTypes } from 'react';
import comment from './comment.js';
import author from './author.js';
var list = {
    data: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        createTime: PropTypes.number,
        clip:PropTypes.string,
        aid: PropTypes.number,
        author:author
    }))
};

var detail = PropTypes.shape({
    aid: PropTypes.string,
    title: PropTypes.string,
    createTime: PropTypes.number,
    content: PropTypes.string,
    author:author,
    comment: comment
});

export {list,detail}