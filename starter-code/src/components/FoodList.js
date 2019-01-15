import React, { Component } from "react";
import FoodBox from "./FoodBox";
import SearchBar from "./SearchBar";

export default class FoodList extends Component {
  constructor() {
    super();
    this.state = {
      foodFilt: []
    };
  }

  componentDidMount() {
    this.setState({
      foodFilt: this.props.foodData
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      foodFilt: nextProps.foodData
    });
  }

  handleFilter(foodFiltSB) {
    this.setState({
      foodFilt: foodFiltSB
    });
  }

  render() {
    return (
      <div className="column">
        <SearchBar
          foodDataFilt={foodFiltSB => this.handleFilter(foodFiltSB)}
          foodData={this.props.foodData}
        />
        {this.state.foodFilt.length < 1 ? (
          <article className="message">
            <div className="message-body">
              We don't have this in our DB, search for other food or add your
              own meal by Add Food button.
            </div>
          </article>
        ) : (
          this.state.foodFilt.map((food, index) => (
            <FoodBox
              key={food.name}
              food={food}
              index={index}
              addItemToday={todayFood => this.props.addItemToday(todayFood)}
            />
          ))
        )}
      </div>
    );
  }
}
