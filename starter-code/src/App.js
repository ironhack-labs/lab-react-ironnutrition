import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Foodbox} from './components/Foodbox';

class App extends Component {

  toggleNewFood = () => {
    this.setState({enableFood: !this.state.enableFood});
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Foodbox/>
      </div>
    );
  }
}

export default App;
