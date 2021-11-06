import React from 'react';
import './App.css';
import FoodBox from './components/FoodBox'
import AddFood from './components/AddFood';
import foods from './foods.json';

class App extends React.Component {
  state = {
    foodToDisplay: foods,
    formVisible: false,
  };

  handleFormVisibility = () => {
    this.setState({ formVisible: !this.state.formVisible });
  };

  addFoodHandler = (FoodInfo) => {
    const foodToDisplayCopy = [...this.state.foodToDisplay, FoodInfo];
    this.setState({ foodToDisplay: foodToDisplayCopy });
  };

  render() {
    return (
      <div>
        <h1>Iron-Nutrition</h1>
        <div>
          <button onClick={this.handleFormVisibility}>Add new food</button>
          {this.state.formVisible === true && <AddFood addFoodHandler={this.addFoodHandler}/>}
        </div>
        <div className="foodbox-container">
          {this.state.foodToDisplay.map((food) => (
            <FoodBox key={food.id} {...food} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
