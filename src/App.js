import React, { Component } from 'react';
import foodsJson from './foods.json';
import FoodItems from './components/FoodItems';
import FoodBox from './components/FoodBox';
import TotalCal from './components/TotalCal';
import Search from './components/Search';
import 'bulma/css/bulma.css';

//need to re-watch todays class again I'm just trying to modify what we did in class today but i realized i didnt know what i was doing really neeed way more practice and to go back to the days i missed
// :-(

class App extends Component {
  state = {
    foods: foodsJson,
    total: [],
  };

  handleAddTotal = (event, food) => {
    // Preventing the default behaviour of forms
    // since the make a GET request with query
    event.preventDefault();

    // here `event.target` will give you the form node
    // you can grab any `input value` from that form using it's name attributes
    console.log(event.target.quantity.value);
    console.log(food);

    let foodObj = {
      name: food.name,
      calories: food.calories,
      quantity: Number(event.target.quantity.value),
    };
    // Add your food to the total array along with the other foods
    this.setState({
      total: [foodObj, ...this.state.total],
    });
  };

  handleAddNewFood = (newFood) => {
    // remeber to update the filtered foods as well which we have not done
    this.setState({
      foods: [newFood, ...this.state.foods]
    })
}

handleSearch = (event) => {
  let searchedFood = event.target.value
  const {foods} = this.state

  // Filter the foods 
  let filteredFoods = foods.filter((food) => {
      return food.title.toLowerCase().includes(searchedFood.toLowerCase())
  })

  // update the foods state to fileredFoods
  this.setState({
    filteredFoods: filteredFoods
  })
}


  render() {
    return (
      <div>
        Ironnutrition
  
         <Search onSearch={this.handleSearch} />
                <FoodItems 
                  foods={this.state.filteredFoods}
                  handleAddTotal={this.handleAddTotal}
                  onAddNewFood={this.handleAddNewFood}
                />
       
        <FoodBox></FoodBox>
        <TotalCal foods={this.state.total} />
      </div>
    );
  }
}

export default App;
