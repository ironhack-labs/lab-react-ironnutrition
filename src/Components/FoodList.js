import React, {Component} from "react";
import FoodBox from "./FoodBox";
import Form from "./Form";


class FoodList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: this.props.foods,
      display: false,
      searchedFood: '',
    };
  }

  editSearch= (e)=> {
    this.setState({searchedFood: e.target.value})
  }

  addFood = (food) => {
    const arrayCopy = [...this.state.foods];
    arrayCopy.push(food);
    this.setState({ foods: arrayCopy });
  };

  displayFoodBox = () => {
    console.log(this.state)
  return this.state.foods.filter((food)=> {
    return food.name.toLowerCase().includes(this.state.searchedFood.toLowerCase())
  }).map((food) => {

      return <FoodBox {...food} key={food.name} />;
    });
  };

  render() {
    return (
      <div class="food-list">
        <Form addFood={(food) => this.addFood(food)} />
        <input
          type="text"
          value={this.state.searchedFood}
          onChange={this.editSearch}
          placeholder="Search food.."
        />

        <div class="columns">
          <div class="column">
            <p className="food-container">{this.displayFoodBox()}</p>
          </div>
          <div class="column"></div>
          <h2>Today's food</h2>
          <p>Total: cal</p>
        </div>
      </div>
    );
  }
}

export default FoodList;
