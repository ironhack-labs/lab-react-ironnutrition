import React, { Component } from 'react';
//import Search from './Search';
import Foodbox from './Foodbox';
import AddFood from './AddFood';
//import Summary from './Summary';
import foods from '../foods.json';

class Foods extends Component {
  state = { foods: foods, showAddFood: true };



  addOneFood = (newFood) => {
    const updatedFoods = [newFood, ...this.state.foods];
    this.setState({ foods: updatedFoods, showAddFood: false });
    
  }

  render() {
    return (
      <div class = "columns">
       <div class="column">
        {this.state.foods.map((oneFood, index) => {
          return <Foodbox oneFood={oneFood} key={index} />;
        })}
        </div>
        <div class = "column">
        <button className="button is-info" onClick={ this.addOneFood } >Add Food</button>
        {this.state.showAddFood
        ? <AddFood createFood={this.addOneFood} />
      : null}
        {/*<Summary />*/}
        </div>
      </div>
    );
  }
}

export default Foods;
