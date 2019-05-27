import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './FoodBox'
import SearchBar from './SearchBar';
import TodaysFoods from './TodaysFoods';
import AddFood from './AddFood';
import Header from './Header';


class App extends Component {
  state = {
    foods: foods
  }

  handleSearchFoods = (text) => {
    this.setState({
      foods: foods.filter(e => e.name.toLowerCase().includes(text.toLowerCase()))
    })
  }

  addFood = food => {
    this.setState({
      foods: [...this.state.foods, food]
    })
  }

  render() {
    return (
      <main className="container">
        <Header />
        <SearchBar onSearch={this.handleSearchFoods} />
        <AddFood addFood={this.addFood} />
        <FoodBox foods={this.state.foods} />

      <div className="col-3 p-4">
              <TodaysFoods />
      </div>
      </main>
      
    )
  }
}

export default App;
