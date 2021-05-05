import React from 'react';
import FoodBox from './components/FoodBox/FoodBox'
import foods from './foods.json'
import 'bulma/css/bulma.css';
import './App.css';

function App() {
  return (
    <div className="App">
      {foods.map((food) => {
        return (
          <FoodBox
            image={food.image}
            name={food.name}
            calories={food.calories}
            quantity={food.quantity}
          />
        )
      })}
    </div>
  );
}

export default App;
