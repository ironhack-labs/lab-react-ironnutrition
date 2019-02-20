import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';

class App extends Component {

  state = {
    foods
  }

  addNew = () => {
    this.setState({
      ...this.state
    })
  }

  handleName = (e) => {
    this.setState({
      ...this.state,
      name: e.target.value
    })
  }

  // handleCalories = (e) => {
  //   this.setState({
  //     ...this.state,
  //     calories: e.target.value
  //   })
  // }

  // handleImage = (e) => {
  //   this.setState({
  //     ...this.state,
  //     image: e.target.value
  //   })
  // }

  render() {
    return (
      <div className="App">
        <FoodBox foods={this.state.foods} />
      </div>
    );
  }
}

export default App;
