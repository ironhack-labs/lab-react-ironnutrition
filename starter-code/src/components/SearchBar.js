import React, { Component } from "react";

export default class SearchBar extends Component {
  
  handleChange(e) {
    let initialList = [];
    let newList = [];

    if (e.target.value !== "") {
      initialList = this.props.foodData;
      newList = initialList.filter(food => {
        const lc = food.name.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.props.foodData;
    }

    this.props.foodDataFilt(newList);
  }

  render() {
    return (
      <div className="content">
        <input
          className="input"
          type="text"
          placeholder="Search for food"
          onChange={e => {
            this.handleChange(e);
          }}
        />
      </div>
    );
  }
}
