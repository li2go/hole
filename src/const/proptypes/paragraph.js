import  { PropTypes } from 'react';

import comment from './comment.js'

var list= {
    data: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        content: PropTypes.string,
        comment: comment
    }))
};


export {list}