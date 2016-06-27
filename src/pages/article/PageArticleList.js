/**
 * Created by lanhao on 16/4/12.
 */
import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import _ from 'lodash';
import {connect} from 'react-redux';

import ArticleList from '../../components/article/list.js'
class PageArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.dispatch()
    }

    render() {
        var listStyle = {margin: 'auto', width: '50%', maxWidth: 768};
        return <div>
            <ArticleList data={this.props.articles} style={listStyle}></ArticleList>
        </div>
    }

}

export default connect((state)=>(state.article))(ArticleList)


var mock_avatar = '';
var test = [{
    title: 'Some Day Before sd',
    createTime: 1460435667867,
    aid: 0,
    isNew: 0,
    clip: 'dasdasdasdasdadasdasdasdasdasdasdasddasdasdasdasdasdasdasddasdasdasdasdasdasdasddasdasdasdasd' +
    'asdasdasddasdasdasdasdasdasdasddasdasdasdasdasdasdasddasdasdasdasdasdasdasddasdasdasdasdasdasdasdd' +
    'asdasdasdasdasdasdasddasdasdasdasdasdasdasddasdasdasdasdasdasdasdsdasdasd',
    author: {
        uid: 1,
        name: 'yyngjj',
        avatar: {
            uid: 1,
            thumb: {
                big: 'xxxx',
                small: mock_avatar
            }
        }
    }
}, {
    title: 'Some Day Before sd',
    createTime: 1460435667867,
    aid: 0,
    isNew: 0,
    clip: 'dasdasdasdasdasddasdasdasdasdasdasdasddasdasdasdasdasdasdasddasdasdasdasdasdasdasddasdasda' +
    'sdasdasdasdasddasdasdasdasdasdasdasddasdasdasdasdasdasdasddasdasdasdasdasdasdasddasdasdasdasdas' +
    'dasdasddasdasdasdasdasdasdasddasdasdasdasdasdasdasddasdasdasdasdasdasdasdasdasd',
    author: {
        uid: 1,
        name: 'yyngjj',
        avatar: {
            uid: 1,
            thumb: {
                big: 'xxxx',
                small: mock_avatar
            }
        }
    }
}, {
    title: 'Some Day Before sd',
    createTime: 1460435667867,
    aid: 0,
    isNew: 0,
    clip: 'dasdasdasdasdasdasdasd',
    author: {
        uid: 1,
        name: 'yyngjj',
        avatar: {
            uid: 1,
            thumb: {
                big: 'xxxx',
                small: mock_avatar
            }
        }
    }
}, {
    title: 'Some Day Before sd',
    createTime: 1460435667867,
    aid: 0,
    isNew: 0,
    clip: 'dasdasdasdasdasdasdasd',
    author: {
        uid: 1,
        name: 'yyngjj',
        avatar: {
            uid: 1,
            thumb: {
                big: 'xxxx',
                small: mock_avatar
            }
        }
    }
}, {
    title: 'Some Day Before sd',
    createTime: 1460435667867,
    aid: 0,
    isNew: 0,
    clip: 'dasdasdasdasdasdasdasd',
    author: {
        uid: 1,
        name: 'yyngjj',
        avatar: {
            uid: 1,
            thumb: {
                big: 'xxxx',
                small: mock_avatar
            }
        }
    }
}, {
    title: 'Some Day Before sd',
    createTime: 1460435667867,
    aid: 0,
    isNew: 0,
    clip: 'dasdasdasdasdasdasdasd',
    author: {
        uid: 1,
        name: 'yyngjj',
        avatar: {
            uid: 1,
            thumb: {
                big: 'xxxx',
                small: mock_avatar
            }
        }
    }
}, {
    title: 'Some Day Before sd',
    createTime: 1460435667867,
    aid: 0,
    isNew: 0,
    clip: 'dasdasdasdasdasdasdasd',
    author: {
        uid: 1,
        name: 'yyngjj',
        avatar: {
            uid: 1,
            thumb: {
                big: 'xxxx',
                small: mock_avatar
            }
        }
    }
}, {
    title: 'Some Day Before sd',
    createTime: 1460435667867,
    aid: 0,
    isNew: 0,
    clip: 'dasdasdasdasdasdasdasd',
    author: {
        uid: 1,
        name: 'yyngjj',
        avatar: {
            uid: 1,
            thumb: {
                big: 'xxxx',
                small: mock_avatar
            }
        }
    }
}, {
    title: 'Some Day Before sd',
    createTime: 1460435667867,
    aid: 0,
    isNew: 0,
    clip: 'dasdasdasdasdasdasdasd',
    author: {
        uid: 1,
        name: 'yyngjj',
        avatar: {
            uid: 1,
            thumb: {
                big: 'xxxx',
                small: mock_avatar
            }
        }
    }
}, {
    title: 'Some Day Before sd',
    createTime: 1460435667867,
    aid: 0,
    isNew: 0,
    clip: 'dasdasdasdasdasdasdasd',
    author: {
        uid: 1,
        name: 'yyngjj',
        avatar: {
            uid: 1,
            thumb: {
                big: 'xxxx',
                small: mock_avatar
            }
        }
    }
}, {
    title: 'Some Day Before sd',
    createTime: 1460435667867,
    aid: 0,
    isNew: 0,
    clip: 'dasdasdasdasdasdasdasd',
    author: {
        uid: 1,
        name: 'yyngjj',
        avatar: {
            uid: 1,
            thumb: {
                big: 'xxxx',
                small: mock_avatar
            }
        }
    }
}, {
    title: 'Some Day Before sd',
    createTime: 1460435667867,
    aid: 0,
    isNew: 0,
    clip: 'dasdasdasdasdasdasdasd',
    author: {
        uid: 1,
        name: 'yyngjj',
        avatar: {
            uid: 1,
            thumb: {
                big: 'xxxx',
                small: mock_avatar
            }
        }
    }
}, {
    title: 'Some Day Before sd',
    createTime: 1460435667867,
    aid: 0,
    isNew: 0,
    clip: 'dasdasdasdasdasdasdasd',
    author: {
        uid: 1,
        name: 'yyngjj',
        avatar: {
            uid: 1,
            thumb: {
                big: 'xxxx',
                small: mock_avatar
            }
        }
    }
}, {
    title: 'Some Day Before sd',
    createTime: 1460435667867,
    aid: 0,
    isNew: 0,
    clip: 'dasdasdasdasdasdasdasd',
    author: {
        uid: 1,
        name: 'yyngjj',
        avatar: {
            uid: 1,
            thumb: {
                big: 'xxxx',
                small: mock_avatar
            }
        }
    }
}, {
    title: 'Some Day Before sd',
    createTime: 1460435667867,
    aid: 0,
    isNew: 0,
    clip: 'dasdasdasdasdasdasdasd',
    author: {
        uid: 1,
        name: 'yyngjj',
        avatar: {
            uid: 1,
            thumb: {
                big: 'xxxx',
                small: mock_avatar
            }
        }
    }
}, {
    title: 'Some Day Before sd',
    createTime: 1460435667867,
    aid: 0,
    isNew: 0,
    clip: 'dasdasdasdasdasdasdasd',
    author: {
        uid: 1,
        name: 'yyngjj',
        avatar: {
            uid: 1,
            thumb: {
                big: 'xxxx',
                small: mock_avatar
            }
        }
    }
}, {
    title: 'Some Day Before sd',
    createTime: 1460435667867,
    aid: 0,
    isNew: 0,
    clip: 'dasdasdasdasdasdasdasd',
    author: {
        uid: 1,
        name: 'yyngjj',
        avatar: {
            uid: 1,
            thumb: {
                big: 'xxxx',
                small: mock_avatar
            }
        }
    }
}];