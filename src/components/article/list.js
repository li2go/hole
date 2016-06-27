/**
 * Created by lanhao on 16/4/12.
 */
import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import _ from 'lodash';
import {list as articleListPropTypes} from '../../const/proptypes/article.js';
import {Link} from 'react-router';


import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

const mock_avatar="http://wx.qlogo.cn/mmopen/iars0OI1icGmrSa9rzy8avflwI6YAiczksBLib5YNwHbAyXiaGc03aLz8gdMqsicW0FDbhX00eZ5yf9XBWibBoxhlWNUqhRkA6WhMS4/0"
const CardExampleWithoutAvatar = (item,index) => (
    <Card
        style={{textAlign:'left'}}
        key={index}>
        <CardHeader
            title={item.title}
            avatar={item.author.avatar.thumb.small}
            subtitle={item.author.name+getTimeShow(item.createTime)}
            subtitleStyle={{fontSize:'0.8rem',paddingTop:'0.1rem'}}
            actAsExpander={true}
            showExpandableButton={true}
            />
        <CardText
            style={{overflowWrap: 'break-word'}}
            expandable={true}>
            {item.clip}
        </CardText>
        <CardActions expandable={true}>
            <FlatButton onTouchTap={this.handleReplay} label="Replay"/>
            <FlatButton onTouchTap={this.handleCollect} label="Comments"/>
        </CardActions>
    </Card>
);





export default class  ArticleList extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    handleReplay=()=>{
        console.log('replayClick')
    };
    handleCollect=()=>{
        console.log('replayClick')
    };
    render() {
        var listData = this.props.data;
        return (<ul style={this.props.style}>
            {listData.map((item, index)=> {
                return CardExampleWithoutAvatar(item,index);
                //return <li key={index}>{getTimeShow(item.createTime)} |
                //    <Link to={'/article/'+item.aid}>{item.isNew?'新':''} {item.title}</Link>
                //    <Link to={'/user/'+item.aid+'/article/'}>{item.author.name}</Link>
                //</li>
            })}
        </ul>)

    }

}
ArticleList.propTypes = articleListPropTypes;
ArticleList.defaultProps = {
    data: []
};


function getTimeShow(timeStamp){
    var date=new Date(timeStamp);
    return date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate()
}
