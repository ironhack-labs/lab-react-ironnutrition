import React, { Component } from 'react';
import FoodItem from "./FoodItem";

export default class TodaysList extends Component {
  render() {
    return (
      <div className="todaysList">
        <h1 className="title">{this.props.title}</h1>
        <ul className="foodItems">
          {this.props.todaysList.length < 1 ? <div className="noFood">There's no food yet, please select quantity and add it by clicking in the blue button</div> : null}
          {this.props.todaysList.map((f) => {
            return (
              <FoodItem
                key={f._id}
                quantity={f.quantity}
                name={f.name}
                calories={f.calories}
                onDelete={(idx) => this.props.deleteFood(idx)}
              />
            )}
          )}
        </ul>
        <h2 className="totalCals">{this.props.todaysList.length < 1 ? "no calories yet" : (this.props.totalCals + " total calories")}</h2>
      </div>
    );
  }
}
