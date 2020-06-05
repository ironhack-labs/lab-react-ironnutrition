import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import _ from 'lodash';

class TodaysFoodsBox extends Component {

  render() {

    let sub = this.props.quantity * this.props.calories

    return (
      <div className="list-item">{this.props.quantity} x {this.props.name} = {sub} Calories</div>
    );
  }
}

export default TodaysFoodsBox;
