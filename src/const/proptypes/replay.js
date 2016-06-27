import  { PropTypes } from 'react';
import userInfo from './userinfo.js'
import userLink from './userLink.js'

var replay = PropTypes.shape({
    userInfo:userInfo,
    time:PropTypes.number,
    to:userLink
});

export {replay}