import React, { Component } from 'react';
import './App.css';
import FoodBox from './components/foodbox/FoodBox'
import Form from './components/form/Form'
import foods from './foods.json'

class App extends Component {
  
  state = {
    foods : [...foods]
  }

  addFoodBox= (newBox) => {
    const {foods} = this.state
    this.setState({
      foods : [...foods, newBox]
    });
  }
  
  render() {
    return (
      <div>
        <Form addFoodBox={this.addFoodBox}/>
        {this.state.foods.map((food, index)=> {
            const {name, calories, image, quantity} = food;
            return <FoodBox key={index} name={name} calories={calories} image={image} quantity={quantity} />
        })}
      </div>
    );
  }
}

export default App;
