import React, { Component } from "react";
import FoodBox from "./FoodBox";
import SearchBar from "./SearchBar";

export default class FoodList extends Component {
  constructor() {
    super();
    this.state = {
      newList: [],
      message: false
    };
  }

  componentDidMount() {
    this.setState({
      newList: this.props.foodArr
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      newList: nextProps.foodArr
    });
  }

  handleFilter(filtered) {
    this.setState({
      newList: filtered
    });
  }

  handleAddToList(todayListItem) {
    this.props.foodDetail(todayListItem);
  }

  render() {
    return (
      <div className="column">
        <SearchBar
          filteredList={filtered => this.handleFilter(filtered)}
          foodData={this.props.foodArr}
        />

        {this.state.newList.map(food => (
          <FoodBox
            key={food.name}
            food={food}
            todayList={todayListItem => this.handleAddToList(todayListItem)}
          />
        ))}
      </div>
    );
  }
}
