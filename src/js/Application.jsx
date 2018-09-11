import React from "react";
import "bulma/css/bulma.css";
import foods from "../../foods.json";
import FoodBox from "./FoodBox";

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      foods: foods
    };

    this._updateSearchChange = this._updateSearchChange.bind(this);
  }

  render() {
    const foodList = this.state.foods.map((food, index) => {
      return (
        <FoodBox
          name={food.name}
          calories={food.calories}
          image={food.image}
          quantity={food.quantity}
          key={"food_" + index}
        />
      );
    });
    return (
      <div className="container">
        <h1>IronNutrition</h1>
        <input
          onChange={this._updateSearchChange}
          className="input"
          type="text"
        />
        {foodList}
      </div>
    );
  }

  _searchFood(filter) {
    this.setState({
      foods: foods.filter(el => {
        return el.name.match(new RegExp(`.*${filter}.*`, "i"));
      })
    });
  }

  _updateSearchChange(event) {
    this.setState({
      search: event.target.value
    });
    return this._searchFood(event.target.value);
  }
}

export default Application;
