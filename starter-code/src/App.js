import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

class App extends React.Component {
  state = {
    foods: [...foods],
    today:[]
  }

  handleSearch = query => {
    this.setState({
      foods:foods.filter(food=>food.name.toLowerCase().includes(query.toLowerCase()))
		}) 
  }

  addFood= food => {
    this.setState({
      today:[...this.state.today, food]
    })
  }

  render() {
    return (
      <div className="App">
				
		
      </div>
    );
  }
}
export default App;