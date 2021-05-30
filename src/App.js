import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox';
import SearchBar from './Components/SearchBar';

import React, { Component } from 'react';

class App extends React.Component {
  state = {
    foodsList: foods,
    display: false,
    searchFood: '',
    todaysFood: [],
  };

  


  // iteration #4 : Implement Search Bar
  handleSearchValue = (value) => {
    this.setState({
      searchValue: value,
    });
  };

  render() {
    return (
    <div className="App">
      <div className="container">
        <h1 className="title">Iron Nutrition</h1>
        {/* // iteration #2 :  Display food */}
        {/* <FoodBox></FoodBox> */}
        <FoodBox/>
        
          
          {/* // iteration #3 :  Add New food */}
          <div>

          </div>

          {/* // iteration #4 Implement search bar  */}
          <SearchBar>
            handleChange={this.handleSearchValue}
            value={this.state.searchValue}
          </SearchBar>
        </div>
      </div>
    );
  }
}

export default App;
