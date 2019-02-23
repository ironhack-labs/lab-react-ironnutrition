import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import Ironfoods from './components/Ironfood'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allFood: foods,
    };

  }

  render() {
    return (
      <div className="App">
       <Ironfoods allFood = {this.state.allFood} />
      </div>
    );
  }
}

export default App;
