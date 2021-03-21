import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox';
import FormAddFood from './Components/FormAddFood';

class App extends React.Component {
  state = {
    food: foods,
    displayedFood: ""
  }
  
  handleSearchChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({[name]: value });

    this.searchFood({name: value});
  }

  addFoodHandler = (newFood) => {
    // const foodCopy = [...this.state.food];
    // foodCopy.push(newFood);
    this.setState({food: [newFood, ...this.state.food], displayedFood: [...this.state.food]});
  }

  searchFood = (searchValue) => {
    const foodCopy = [...this.state.food];
    const searchResult = foodCopy.filter(product => {
      return product.name.toLowerCase().includes(searchValue.name);
    })
    this.setState({displayedFood: searchResult});
  }
  
  render() {
    console.log("state.food: ", this.state.food);

    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <FormAddFood addFood={this.addFoodHandler} />
        <form>
          <input onChange={this.handleSearchChange} type="text" name="name" placeholder="Search for food"/>
        </form>
        {!this.state.displayedFood &&
        this.state.food.map((foodItem, index) => (
            <FoodBox key={index} food={foodItem} />
          ))
        }
        {this.state.displayedFood && 
        this.state.displayedFood.map((foodItem, index) => (
            <FoodBox key={index} food={foodItem} />
          ))
        }
        
      </div>
    );
  }
};

export default App;
