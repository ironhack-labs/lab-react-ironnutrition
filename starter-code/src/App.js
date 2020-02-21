import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import Food from './components/FoodBox';

class App extends Component {
  state = {
    listOfContacts: foods.slice(0, 20)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IronNutrition</h1>
        </header>
        <p className="App-intro">

        {
            this.state.listOfContacts.map(foods=> {
              return <Food picture={foods.image} name={foods.name} calories={foods.calories}/>
            })
          } 

        </p>
      </div>
    );
  }
}

export default App;
