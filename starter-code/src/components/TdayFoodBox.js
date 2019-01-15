import React, { Component } from "react";

export default class TdayFoodBox extends Component {
  constructor() {
    super();
    this.state = {
      message: false
    };
  }

 

  render() {
    let { food } = this.props;
    return (
        <div className="box">
          <div className="columns is-mobile">
            <div className="column">{food.name}</div>
            <div className="column">{food.quantity} units</div>
            <div className="column">{food.calories} cal</div>
          </div>
          <p>Id: {this.props.index}</p>
          <a class="delete" onClick={()=>this.props.onDelete(this.props.index)}></a>
        </div>
    );
  }
}
