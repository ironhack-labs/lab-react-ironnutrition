import React from 'react';
import foodList from './foods.json';
import Foodbox from './components/FoodBox/FoodBox';
import 'bulma/css/bulma.css';
import './App.css';
import Form from './components/Form/Form';

class App extends React.Component {
  state = {
    foods: foodList 
  }
   
  addFood = (food) => {
    const arrayCopy = [ ...this.state.foods ];
    arrayCopy.push(food);
    this.setState({ foods: arrayCopy });
  }

  displayFoods = () => {
    return this.state.foods.map((singleFood) => {
      return (        
          <Foodbox {...singleFood}/>        
      )
    })
  }

  render() {
    return (
      <div>
      <Form addFood={(food) => this.addFood(food)} />
      <button onClick={() => this.addFood()}>Add food</button>
        <div>
        {
        this.displayFoods()
        }
        </div>
      </div>
    )
  }
}

export default App;
