import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { FoodMenu } from "./components/foodmenu";
import { Form } from "./components/form";


class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <FoodMenu />
      </div>
    );
  }
}

export default App;
