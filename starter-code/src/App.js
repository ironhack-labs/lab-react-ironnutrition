import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox.js'

class App extends Component {
  constructor(){
    super()
    this.state={
      foods:foods
    }

    this.getData=this.getData.bind(this);
  }

  getData(){
    return this.state.foods;
  }
  render() {
      let data=this.state.foods.map((item)=>{
        return(
        <li key={item.name}>
        <FoodBox  name={item.name} calories={item.calories} image={item.image} quantity={item.quantity} />
        </li>
      )
      })
    return (

      <div className="App">
      <ul>{data}</ul>


      </div>
    );
  }
}

export default App;
