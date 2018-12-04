import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import Foodbox from './components/Foodbox/Foodbox.js'
import FoodForm from './components/FoodForm/FoodForm.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: foods,
      open: false,
  }
  this.toggleFormShow = this.toggleFormShow.bind(this);
};

toggleFormShow = () => {
    this.setState({open: !this.state.open})
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        IronNutrition          
        </p>
        <button className="close" onClick={this.toggleFormShow}>Toogle New Food </button>
        {this.state.open && <FoodForm />}

        {this.state.foods.map((food, index)=> <Foodbox key={index} {...food} />)}
      </div>
    );
  }
}

export default App;
