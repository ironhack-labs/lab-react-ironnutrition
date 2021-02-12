import React from 'react';
// import logo from './logo.svg';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox'
import './App.css';
function App() {
  return (
    <div className="App">
    {foods.map((food) => {
      return (
        <div>
          <FoodBox name={food.name} image={food.image} calories={food.calories} quantity={food.quantity} />
        </div>
      )
    })}
    </div>
  );
}

export default  App;