import React, { Component } from 'react';
import BulmaButton from "./BulmaButton";

export default class FoodItem extends Component {
  handleDelete(e){
    e.stopPropagation();
    this.props.onDelete(this.props.idx);
  }
  render() {
    return (
      <li className="foodItem">
        <span className="item">{this.props.quantity} {this.props.name} = {this.props.calories * this.props.quantity} cals</span>
        <BulmaButton isWarning className="is-rounded delete_btn" onClick={(idx)=>{this.handleDelete(idx)}}>-</BulmaButton>
      </li>
    );
  }
}
