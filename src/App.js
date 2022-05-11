import React, { useState } from "react";
import './App.css';
import FoodBox from './components/FoodBox';
import foodsArr from './foods.json';


function App() {
  const [foods, setFoods] = useState(foodsArr);

  return (
    <div>
      {
        foods.map((food, index) => {
          return (
            <FoodBox key={index} name={food.name} calories={food.calories} image={food.image} quantity={food.quantity} />
          )

        })
      }


    </div>
  );
}

export default App;
