import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './FoodBox.js'

class App extends Component {
  displayFood(){
    let foodList=[...foods]
    let newFoodList=foodList.splice(0,5);
    return(
      newFoodList.map((eachFood,i)=>{
        return(
          <FoodBox name={eachFood.name} cal={eachFood.calories} quantity={eachFood.quantity} image={eachFood.image}/>
        )
      }
        
      )
    )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <FoodBox name="vegan pizza" cal="350" quantity="2" image="https://i.imgur.com/DupGBz5.jpg"/> */}
        {this.displayFood()}
      </div>
    );
  }
}

export default App;
