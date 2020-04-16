import React, { Component } from 'react';
import FoodBox from './components/FoodBox'
import AddButton from './components/AddButton';
import SearchBar from './components/SearchBar';
import Foods from './foods.json'
import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {

  state = {
    listFood: Foods,
  }

  addFoodHandler = (theFood) => {
    const newListFood = [...this.state.listFood];
    newListFood.push(theFood);
    this.setState({
      listFood: newListFood,
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <div className="FoodBox-container">
          {this.state.listFood.map((list) => (
            <FoodBox image={ list.image } name={ list.name } calories={ list.calories } />
            ))}
        </div>
        <AddButton addFood = { this.addFoodHandler }/>
      </div>  
    );
  }
}

export default App;
