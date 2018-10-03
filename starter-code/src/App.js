import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './FoodBox.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
{/* // se hace un map de foods para mostrar todos los foodbox como elementos */}
        {foods.map((e) => {
          return <FoodBox class="column content" key={e.name} {...e}/>
        })}

      </div>
    );
  }
}

export default App;
