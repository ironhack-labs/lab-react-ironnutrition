import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Foodbox from './FoodBox';
import Search from './Search';

class App extends React.Component {
  state = {
    foods: foods,
    filteredFoods: foods,
  };
  handleSearch = (event) => {
    let searchName = event.currentTarget.value.toLowerCase();
    let cloneFoods = this.state.foods.filter((food) => {
      return food.name.toLowerCase().includes(searchName);
    });
    this.setState({
      filteredFoods: cloneFoods,
    });
  };
  render() {
    return (
      <div className="App">
        <Search onSearch={this.handleSearch} />
        <Foodbox />
      </div>
    );
  }
}

export default App;
