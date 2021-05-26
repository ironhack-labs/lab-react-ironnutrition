import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './Components/FoodBox'


function App() {
  return (
    <div className="App">
      {foods.map((food) => {
        return (
          <FoodBox 
          name={food.name}
          calories={food.calories}
          image={food.image}
          quantity={food.quantity}
          />
        );
      })}
    </div>
  );
}

export default App;
