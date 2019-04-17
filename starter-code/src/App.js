import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import FoodBoxAdd from './components/FoodBoxAdd'

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {showForm: false, foods}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showForm: !prevState.showForm
    }));
  }
  
  addFoodHandler = (theFood) => {
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(theFood);
    this.setState({
      foods: foodsCopy,
      showForm: false
    })
  }
  

  render() {  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

{/* Show Hide Button and Form */}

        <FoodBoxAdd warn={this.state.showForm} addTheFood={this.addFoodHandler} />
        <button onClick={this.handleToggleClick}>
          {this.state.showForm ? 'Hide Form' : 'Show Form'}
        </button>

{/* Show Foods */}

{
  this.state.foods.map((oneFood, index) => {
    return <FoodBox key={index} {...oneFood} />
  })
}



      </div>
);
  }
}

export default App;
