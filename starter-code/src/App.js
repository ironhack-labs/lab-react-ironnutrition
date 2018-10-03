import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import {Foodbox} from './Foodbox.js'

class App extends Component {
  handleSubmit(){
  // render() {
  //   return (
  //   <label>Item</label>
  //   <input type='text' value='name'></input>
  //   )
  // }
  console.log('button handleSubmit en App.js')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.handleSubmit.bind(this)}>Add new food</button>   
         <Foodbox/>
      </div>
    );
  }
}

export default App;
