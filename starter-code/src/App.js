import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
class App extends Component {
  state = {
    foods
  }
  
  render() {
    return (
      <div className="App">
        {
          this.state.foods.map((food, idx) => {
            return (
              <FoodBox key={idx} {...food} />
            )            
          })          
        }        
      </div>
    );
  }
}

export default App;
