import React, { Component } from 'react';
import foods from './foods.json';
import FoodBox from './component/FoodBox';
import './App.css'
import 'bulma/css/bulma.css';

class App extends Component {
  state = {
    foodList: [...foods],
    inputSearch: '',
  }

  handleInputSearch = (e) => {
    const { value } = e.target;
    this.setState({ inputSearch: value })
  }

  render() {
    const { inputSearch, foodList } = this.state;

    const filteredFoods =
      foodList.filter(food => {
        return food.name.toLowerCase().includes(inputSearch.toLowerCase());
      })
  

    return (

      <div className="App">

        <h1>Iron Nutrition</h1>
        
        {!!inputSearch && (
          <h2>Search Meal: {inputSearch}</h2>
        )}
        <input
          className="input"
          type="search"
          placeholder="Type your seach"
          onChange={this.handleInputSearch}
          value={inputSearch}
        />

          {filteredFoods.map((food, index) =>
            <FoodBox food={food} key={index}
            />)}

      </div>
    )
  }
}
export default App;
