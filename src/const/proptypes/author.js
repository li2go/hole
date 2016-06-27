import  { PropTypes } from 'react';

import avatar from './avatar.js';

var author = PropTypes.shape({
    uid: PropTypes.string,
    name:PropTypes.string,
    avatar:avatar,
});

export {author}