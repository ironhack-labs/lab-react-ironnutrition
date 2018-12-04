import React, { Component } from 'react';
import FoodBox from "./components/FoodBox"
import foods from "./foods.json"

class App extends Component {
  constructor(){
    super();
    this.state = {
      foods: foods
    }
  }
  
  render() {
    return (
      <div className="App">
        {this.state.foods.map((elem,i)=>(
        <FoodBox key={i}
        {...elem}
        />
        ))}
      </div>
    );
  }
}

export default App;
