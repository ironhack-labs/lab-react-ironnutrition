import React, { Component } from 'react';
import NewFood from './NewFood.jsx';
import Search from './Search.jsx';
// import TodaysFood from './TodaysFood.jsx';

export class FoodBox extends Component {
  state = {
    foods: this.props.foods,
    filteredFoods: this.props.foods,
    todaysFood: [],
  };

  handleAddNewFood = (value) => {
    this.setState({
      foods: [...this.state.foods, value],
      filteredFoods: [...this.state.filteredFoods, value],
    });
  };

  handleSearch = (event) => {
    this.setState({
      filteredFoods: this.state.foods.filter((food) =>
        food.name.toLowerCase().includes(event.target.value.toLowerCase())
      ),
    });
  };

  // addToList = (event) => {
  //   console.log(event.target);
  // };

  render() {
    return (
      <div className="box">
        <Search handleSearchFromParent={this.handleSearch} />
        {this.state.filteredFoods.map((food) => {
          return (
            <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={food.image} alt={food.name} />
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{food.name}</strong> <br />
                    <small>{food.calories} calories</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input className="input" type="number" value="1" />
                  </div>
                  <div className="control">
                    <button className="button is-info">+</button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
        <NewFood handleAddNewFoodFromParent={this.handleAddNewFood} />
        {/* <TodaysFood /> */}
      </div>
    );
  }
}

export default FoodBox;
