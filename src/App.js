import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';

import foods from './foods.json';
import FoodBox from './FoodBox';
import AddFood from './AddFood';
import SearchBar from './SearchBar';


class App extends React.Component {

  state = {
    // create a copy of foods array
    // myFoods: foods.slice(0)
    myFoods: [...foods],
    displayAddFood: false,
    searchTerm: ""
  };

  addNewFoodHandler = (newFood) => {
    this.setState({
      myFoods: [...this.state.myFoods, newFood],
      displayAddFood: false
    });
  }

  handleSearchTerm = (newTerm) => {
    this.setState({ searchTerm: newTerm });
  }

  dynamicSearch = () => {
    return this.state.myFoods.filter(food => food.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  /*  // first version of dynamicSearch function
      dynamicSearch = (searchTerm) => {
      this.setState({
        searchTerm: searchTerm,
        filteredFoods: [...this.state.myFoods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))]
      })
    } */

  render() {
    return (
      <div className="App">

        <h1>IronNutrition</h1>

        <SearchBar value={this.state.searchTerm} onChange={this.handleSearchTerm} />

        <br></br>
        <br></br>

        {this.state.displayAddFood ? (<AddFood addNewFood={this.addNewFoodHandler} />) : (<button className="button is-info" onClick={() => this.setState({ displayAddFood: true })}>Add New Food</button>)}


        {this.dynamicSearch().map((food, key) => {

          return <FoodBox key={key} name={food.name} image={food.image} calories={food.calories}></FoodBox>
        })}
      </div>
    )
  }
}

export default App;
