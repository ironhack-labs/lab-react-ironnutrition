import React, { Component } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './FoodBox';
import Button from './Button';


class App extends Component {
  constructor() {
    super()
    this.state = {
      foodList: foods,
    }
  }

  

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Ironnutrition</h1>
          <div className="columns">
            <div className="column">
              {this.state.foodList.map(e => <FoodBox name={e.name} calories={e.calories} image={e.image}></FoodBox>)}
            </div>
            <div className="column">
              <Button onClick={this.openForm}>Add new food</Button>
              <h2>Today's foods</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
