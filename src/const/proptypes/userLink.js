import  { PropTypes } from 'react';


var userLink = PropTypes.shape({
    uid: PropTypes.string,
    nickname: PropTypes.string,
    enable: PropTypes.bool,//是否有效
});

export {userLink}