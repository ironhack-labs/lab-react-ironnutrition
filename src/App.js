import React, { Component } from 'react';
import './App.css';
import foodsFromJSON from './foods.json';
import FoodBox from './components/FoodBox';
import CreateFood from './components/CreateFood';
import Search from './components/Search';

class App extends Component {
  state= {
    displayAddForm: false,
    listOfFoods: foodsFromJSON,
    filtered: foodsFromJSON,
    todaysFood: [],
    inputQuantity: 0,
  }

  onChangeQuantity = (event) => {
    this.setState({
      inputQuantity: event.target.value,
    });
  };


  addFoodHandler = (theFood) => {
    const foodsCopy = this.state.listOfFoods;
    foodsCopy.push(theFood);
    this.setState({
      filtered:foodsCopy
    })
  };

  filterFoodFunc = (input) => {
    const filtered = this.state.listOfFoods.filter(el => {
      return el.name.toLowerCase().includes(input.toLowerCase())
    });
    this.setState({ filtered: filtered });
  };

  HandleClick = (addFood) => {
    const todayCopy = this.state.today;
    todayCopy.push(addFood); 
    console.log(addFood)
    this.setState({
      today: todayCopy
    })
  }    

  render () {  
    return (
      <div className="App">
        <div>
          <h3>Search:</h3> <Search filteredFood={this.filterFoodFunc} />
          {this.state.filtered.map((food) => {
            return (
              <FoodBox
                key={food.name}
                name={food.name}
                pictureUrl={food.image}
                calories={food.calories}
                // clickToAdd={() => this.addFoodToList(food)}
                onChangeHandler={this.onChangeQuantity}
              />
            );
          })}
        </div>
        <div className="todays-food">
            <h2>Today's Food</h2>
            <p>{this.state.today}</p>
        </div>
        <div className="add-food">
          <h3>Add your preferred food!</h3>
          <CreateFood 
          addTheFood={this.addFoodHandler} />
        </div>
      </div>
    );
}
}

export default App;
