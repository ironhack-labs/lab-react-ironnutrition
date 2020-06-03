import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foodsFromJSON from './foods.json';
import FoodBox from './components/FoodBox';

class App extends Component {
  state= {
    listOfFoods: foodsFromJSON, 
  }
  render () {  
    return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>
      {this.state.listOfFoods.map(food => {
        return (
          <FoodBox
          key={food.name}
          name={food.name}
          pictureUrl={food.image}
          calories={food.calories}
          quantity={food.quantity}
          />
        )
      })

      }
      </div>
    </div>
  );
}
}

export default App;
