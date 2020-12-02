import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox/FoodBox';
import AddFood from './components/AddFood/AddFood';
import foods from './foods.json';
import Search from './components/Search/Search';
import TodaysFood from './components/TodaysFood/TodaysFood';

class App extends React.Component {
  state = {
    foods: foods,
    showForm: false,
    currentFood: {},
  };

  toggleForm = () => {
    console.log(this.state);

    this.setState({ showForm: !this.state.showForm });
  };

  addOneFood = (newFood) => {
    const updatedFoods = [newFood, ...this.state.foods];
    this.setState({ foods: updatedFoods });
    this.toggleForm();
  };

  addFoodToToday = (foodObj) => {
    console.log('helloo');
    this.setState({ currentFood: foodObj });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleForm}>Add new food</button>
        {this.state.showForm ? <AddFood createFood={this.addOneFood} /> : null}
        <TodaysFood foodObj={this.state.currentFood} />
        <Search foods={this.state.foods}/>
        {this.state.foods.map((food) => {
          return (
            <FoodBox
              food={food}
              handleClick={() => this.addFoodToToday(food)}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
