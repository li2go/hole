import  { PropTypes } from 'react';

var avatar = PropTypes.shape({
    uid: PropTypes.number,
    thumb: PropTypes.shape({
        big: PropTypes.string,
        small: PropTypes.string
    })
});

export {avatar}