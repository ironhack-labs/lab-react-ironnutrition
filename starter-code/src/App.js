import React, { Component } from 'react';
import FoodBox from './components/FoodBox'
import AddButton from './components/AddButton';
import SearchBar from './components/SearchBar';
import Foods from './foods.json'
import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {

  state = {
    foodFilter: "",
    listFood: Foods,
  }

  addFoodHandler = (theFood) => {
    const newListFood = [...this.state.listFood];
    newListFood.push(theFood);
    this.setState({
      listFood: newListFood,
    })
  }

  handleFilter = event => {
    this.setState({
      foodFilter: event.target.value
    })
  }

  render() {
    const { foodFilter } = this.state;
    const filteredFood = this.state.listFood.filter((food) => {
      return food.name.toLowerCase().indexOf( foodFilter.toLowerCase() ) !== -1
    })
    return (
      <div>
        <SearchBar inputValue={this.state.foodFilter} inputOnChange={this.handleFilter}/>
        <div>
          <div className="FoodBox-container">
            {filteredFood.map((list) => (
              <FoodBox image={ list.image } name={ list.name } calories={ list.calories } />
              ))}
          </div>
          <div>

          </div>
        </div>
        <AddButton addFood = { this.addFoodHandler }/>
      </div>  
    );
  }
}

export default App;
