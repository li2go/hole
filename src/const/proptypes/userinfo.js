import  { PropTypes } from 'react';

var userInfo = PropTypes.shape({
    uid: PropTypes.string,
    nickname: PropTypes.string,
    createTime: PropTypes.number,
    signature: PropTypes.string,
    cover:PropTypes.string,
    labels:PropTypes.arrayOf(PropTypes.shape({
        title:PropTypes.string,
        lid:PropTypes.number
    }))
});

export {userInfo}