/**
 * Created by lanhao on 16/4/12.
 */
import React, { Component, PropTypes } from 'react';
import Tappable from 'react-tappable';
import _ from 'lodash';
import Avatar from 'material-ui/lib/avatar';
const TEST_DATA = [
  {
    time: Date.now(),
    mark: '一过之后',
    cover: "http://static.picbling.cn/public/img/cover.png",
    title: '木棉糖',
    info: {},
    id: 0,
  }, {
    time: Date.now(),
    mark: '一过之后',
    cover: "http://static.picbling.cn/public/img/cover.png",
    title: '木棉糖',
    info: {},
    id: 1,
  },
  {
    time: Date.now(),
    mark: '一过之后',
    cover: "http://static.picbling.cn/public/img/cover.png",
    title: '木棉糖',
    info: {},
    id: 2,
  }, {
    time: Date.now(),
    mark: '一过之后',
    cover: "http://static.picbling.cn/public/img/cover.png",
    title: '木棉糖',
    info: {},
    id: 3,
  }, {
    time: Date.now(),
    mark: '一过之后',
    cover: "http://static.picbling.cn/public/img/cover.png",
    title: '木棉糖',
    info: {},
    id: 4,
  }, {
    time: Date.now(),
    mark: '一过之后',
    cover: "http://static.picbling.cn/public/img/cover.png",
    title: '木棉糖',
    info: {},
    id: 5
  }, {
    time: Date.now(),
    mark: '一过之后',
    cover: "http://static.picbling.cn/public/img/cover.png",
    title: '木棉糖',
    info: {title: 'sad', subTitle: 'dasdasdas', message: 'dasdasdasd'},
    id: 6,
  }

];

export default class PageUserCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDetailShow: false,
      detailInfo: {},
    }
  }

  handleCloseDetail() {
    this.setState({
      isDetailShow: false
    })
  }

  handleItemClick(index) {
    this.setState({
      isDetailShow: true,
      detailInfo: TEST_DATA[index].info
    })
  }

  render() {
    var styles = {
      prefix: {
        height: 80,
        position: 'relative'
      }
    };
    return <div>
      <div style={styles.prefix}>
        <Avatar>W</Avatar>
      </div>
      <div>
        {TEST_DATA.map((d, index)=> {
          return <CalendarItem key={index} onClick={this.handleItemClick.bind(this,index)}
            {...d}/>
        })}
        <CalendarDetail show={this.state.isDetailShow}
                        info={this.state.detailInfo}
                        onClose={this.handleCloseDetail.bind(this)}
          ></CalendarDetail>
      </div>
    </div>
  }

}

class CalendarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scale: 1
    }
  }

  handleMouseMove() {
    this.setState({
      scale: 1.2
    })
  }

  handleMouseOut() {
    this.setState({
      scale: 1
    })
  }

  render() {
    var styles = {
      main: {
        backgroundImage: 'url(' + this.props.cover + ')',
        transition: 'transform 1s',
        transform: 'scale(' + this.state.scale + ')',
        WebkitTransform: 'scale(' + this.state.scale + ')',
        width: 100,
        height: 100,
        boxSizing: 'border-box',
        cursor: 'pointer'
      }, time: {
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvent: 'none'
      }
    };
    return <div style={{width:100,height:100,margin: 10,display: 'inline-block',overflow:'hidden',position:'relative'}}>
      <div className={'center_background'}
           onMouseOver={this.handleMouseMove.bind(this)}
           onMouseOut={this.handleMouseOut.bind(this)}
           onClick={this.props.onClick}
           style={styles.main}>
      </div>
      <div style={styles.time}>
        {this.props.time}
      </div>
    </div>

  }
}
CalendarItem.PropTypes = {
  time: PropTypes.number,
  mark: PropTypes.string,
  cover: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.Object,
  onClick: PropTypes.func
};
class CalendarDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentClassName: 'fadeIn animated'
    }
  }

  componentWillReceiveProps(np) {
    if (np.show === false) {
      this.setState({
        currentClassName: 'fadeIn animated'
      })
    }
  }

  handleClose(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.onClose();

    //this.setState({
    //  currentClassName:'fadeOut animated'
    //},()=>{
    //  setTimeout(()=>{
    //    this.props.onClose();
    //    this.setState({
    //      currentClassName:'fadeIn animated'
    //    })
    //  },1000)
    //})
  }

  render() {
    var styles = {
      bg: {
        width: window.innerWidth,
        height: window.innerHeight,
        zIndex: 999,
        left: 0,
        top: 0,
        position: 'fixed',
        display: this.props.show ? 'block' : 'none'
      }, main: {
        width: 400,
        height: 600,
        position: 'absolute',
        margin: 'auto',
        padding:20,
        boxSizing:'border-box',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: '#4423e4'
      }, body: {
        overflowY: 'scroll',
        wordWrap:'break-word',
        height:400,
      }, closeButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 30,
        height: 30,
        borderRadius: '50%',
        backgroundColor: '#ee34ee',
        cursor: 'pointer'
      }
    };
    var {info}=this.props.info;
    info = info || {};
    return <div style={styles.bg} onClick={this.handleClose.bind(this)}>
      <div style={styles.main}
           className={this.state.currentClassName}
           onClick={(e)=>{e.preventDefault();e.stopPropagation();}}>
        <div onClick={this.handleClose.bind(this)}
             style={styles.closeButton}>X
        </div>
        <div style={styles.title}>
          {info.title || '标题'}
        </div>
        <div style={styles.subTitle}>
          {info.subTitle || '副标题'}
        </div>
        <div style={styles.body}>
          {info.message || 'dasdasdasdasd dasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdas'}
        </div>
        <div style={styles.footer}></div>
      </div>

    </div>
  }
}
CalendarDetail.PropTypes = {
  info: PropTypes.object,
  show: PropTypes.bool,
  onClose: PropTypes.onClose
};