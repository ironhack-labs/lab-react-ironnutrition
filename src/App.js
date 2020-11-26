import './App.css';
import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foodList from './foods.json';
import FoodBox from './Components/FoodBox';
import FoodForm from './Components/FoodForm';


class App extends Component {
  state = {
    foodState: foodList,
    form: false
  };

  handleRenderForm = () => {
    const stateCopy = { ...this.state };
    stateCopy.form = !this.state.form;
    this.setState(stateCopy);
  }

  handleAddNewFood = (newFoodItem) => {
    const stateCopy = { ...this.state };
    stateCopy.foodState = [...stateCopy.foodState, newFoodItem];
    stateCopy.form = !stateCopy.form;
    this.setState(stateCopy);
  }
  

  render() {
    return (
      <div className = "App">
        <button onClick={this.handleRenderForm}>Add Food</button>
        {this.state.form && (<FoodForm handleLiftFoodFormState = {this.handleAddNewFood} />
        )}
        {this.state.foodState.map((foodItem, index) => (
          <FoodBox key={index} {...foodItem} />
        ))}
      </div>
    );
  }
}
    

export default App;
