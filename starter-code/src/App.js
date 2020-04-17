import React, { Component } from 'react';
import './App.css';
import FoodBox from './Components/FoodBox';
import foods from './foods.json';
import Add from './Components/AddFood';
class App extends Component {
  state = {
      foods : [...foods]
  };
  addFood = (newFood) =>{
    const {foods} = this.state
    this.setState({
      foods : [...foods, newFood]
    })
  }
  render() {

    return (
      <div className="all">

        <div>
          {this.state.foods.map(food =>{
          const {name, calories, image, quantity} = food;
          return <FoodBox name={name} calories={calories} image={image} quantity={quantity} />
          })}
        </div>
          <div>
            <Add addFood={this.addFood}/>    
          </div>
      </div>
    );
  }
}

export default App;
