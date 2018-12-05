import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foodsJSON from './foods.json';
import FoodBox from'./components/FoodBox/FoodBox';
import Button from './components/Button/Button'

class App extends Component {

  constructor(){
    super()

    this.state = {
      foods: foodsJSON
    }
  }

  addFood =() =>{
    let FoodCopia =[...this.state.foods]
    FoodCopia.push();
    this.setState({
      ...this.state,
      foods: FoodCopia
    })
}

  render() {
    return (
      <div className="App">
      <FoodBox foods={[...this.state.foods]} />
      <Button callbackFunction={this.addFood}/>
      </div>
    );
  }
}

export default App;
