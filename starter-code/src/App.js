import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './FoodBox'
import SearchBar from './SearchBar';
import TodaysFoods from './TodaysFoods';
// import AddFood from './AddFood';


class App extends Component {
  state = {
    foods: foods
  }

  handleSearchFoods = (text) => {
    this.setState({
      foods: foods.filter(e => e.name.toLowerCase().includes(text.toLowerCase()))
    })
  }

  render() {
    return (
      <main className="container">
        {/* <AddFood /> */}
        <SearchBar onSearch={this.handleSearchFoods} />
      <FoodBox foods={this.state.foods} />

      <div className="col-3 p-4">
              <TodaysFoods />
      </div>
      </main>
      
    )
  }
}

export default App;
