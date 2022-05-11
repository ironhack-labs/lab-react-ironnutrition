import React, { useState } from "react";
import './App.css';
import FoodBox from './components/FoodBox';
import foodsArr from './foods.json';
import AddFood from "./components/AddFood";


function App() {
  const [foods, setFoods] = useState(foodsArr);

  return (
    <div>
      <section>
        <AddFood foods={foods} setFoods={setFoods}/>
      </section>
      <section>
        {
          foods.map((food, index) => {
            return (
              <FoodBox key={index} name={food.name} calories={food.calories} image={food.image} quantity={food.quantity} />
            )

          })
        }
      </section>
    </div>
  );
}

export default App;
