/**
 * Created by lanhao on 16/6/4.
 */
import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthData: {},
      displayYear: 2015,
      displayMonth: 11
    }
  }

  componentWillMount() {
    //夹在一个默认月的数据
  }

  componentDidMount() {

  }

  render() {
    return <div>
      <div>上一月</div>
      <div>下一月</div>
      <MonthItem year={this.state.displayYear} month={this.state.displayMonth} data={this.state.monthData}/>
    </div>
  }
}

class MonthItem extends Component {
  getMonthData(year,month){
    //取得这年这月的天数。然后生成一个该长度的数组。

    var daysCount=getDaysCountOf(year,month)
  }
  render() {
    return <div>
      <div><span>{this.props.year}</span><span>{this.props.month}</span></div>

      <div></div>

    </div>
  }
}


//utils:

function getDaysCountOf(year,month){

}