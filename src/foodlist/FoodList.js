import React, { Component } from 'react';
import FoodBox from '../foodbox/FoodBox';
import Form from '../form/Form';
import "./FoodList.css";

export default class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        foods: this.props.foods,
        display: false,
        searchedFood: ""
    }
  }

  addFood = (food) => {
      const arrayCopy = [...this.state.foods ];
      arrayCopy.push(food);
      this.setState({foods: arrayCopy});
  }

  displayFoods = () => {
    const { foods } = this.state;
    const foodsFiltered = foods.filter(food => food.name.includes(this.state.searchedFood));

    return foodsFiltered.map((food) => {
        return (
            <FoodBox key={food.name} {...food} />
        )
    })
  }
  handleSearch(event) {
    this.setState({searchedFood: event.target.value})
  }

  render() {
    return (
        <>
            <input className="input my-2 ml-2" name="search" type="text" placeholder="Type a food..." onChange={(e) => this.handleSearch(e)}/>
            <button className="button is-info mt-2 mb-4 ml-2" onClick={() => {this.setState({display: !this.state.display})}}>Add a food</button>
            {this.state.display && <Form addMovie={(food) => this.addFood(food)} /> }
            <div id="foods-container">
                {this.displayFoods()}
            </div>
        </>
    );
  }
}
