import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox'

class App extends React.Component {
  
  state = {
    foodList: foods
  }

  render(){
  return (
    <div className="App">
    {this.state.foodList.map((food) => {
      return (
        <FoodBox
        img={food.image}
        name={food.name}
        cal={food.calories}
        quantity={food.quantity}>
      </FoodBox>
      )
    })}
      
    </div>
  );
}
}

export default App;
