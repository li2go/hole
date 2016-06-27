import  { PropTypes } from 'react';
import userInfo from './userinfo.js.js'
import userLink from './userLink.js'
import userLevel from './userLevel.js'
var profile = PropTypes.shape({
    userInfo:userInfo,
    createAt:PropTypes.number,
    lastOnline:PropTypes.number,
    level:userLevel
});

export {profile}