import React from 'react';
import foods from '../foods.json';
import FoodBox from './FoodBox';
import AddNewFoodButton from './AddNewFoodButton';

class DisplayFoods extends React.Component {
  state = {
    foodItems: foods,
    input: '',
    addedFood: [],
  };

  handleChange = (e) => {
    const filtered = foods.filter((food) =>
      food.name.toLowerCase().includes(this.state.input.toLowerCase())
    );

    this.setState({
      input: e.target.value,
      foodItems: filtered,
    });
  };

  addfood = (index) => {
    let changeAddFood = [...this.state.addedFood];
    changeAddFood.push(
      <li>
        {this.state.foodItems[index].quantity}{' '}
        {this.state.foodItems[index].name} ={' '}
        {this.state.foodItems[index].calories *
          this.state.foodItems[index].quantity}{' '}
        {'cal'}
      </li>
    );
    this.setState({ addedFood: changeAddFood });
  };

  // Mudando a quantidade
  // handleChange = (event) => {
  //   let changeQuantityFood = [...this.state.addedFood];
  //   this.setState({ [event.target.name]: event.target.value });
  //   this.setState({ addedFood: changeAddFood });
  // };



  render() {
    return (
      <div className="is-flex-direction-row">
        <input
          class="input is-focused my-4"
          onKeyUp={this.handleChange}
          type="text"
        ></input>
        <div className="is-flex-direction-row columns">
          <div className="column">
            {this.state.foodItems.map((element, index) => (
              <FoodBox
                index={index.toString()}
                food={element.name}
                addingFood={this.addfood}
                // quantity = ""
                // handleChange = {this.handleChange}
              ></FoodBox>
            ))}
            <AddNewFoodButton />
          </div>
          <div className="content column">
            <h2 class="title is-2">Today's foods</h2>
            <ul>{this.state.addedFood}</ul>
            <span>Total: {} cal</span>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayFoods;
