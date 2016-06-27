
import  { PropTypes } from 'react';
import avatar from './avatar.js';
import userInfo from './userinfo.js';
import replay from './replay.js';
var list= PropTypes.arrayOf(
    PropTypes.shape({
      userInfo:userInfo,
      avatar:avatar,
      content:PropTypes.string,
      createTime:PropTypes.number,
        replay:replay
    })
);

export {list as comment}