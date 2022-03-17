import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import './App.css';
import { FoodBox } from './components/FoodBox';
import { useState } from 'react';

function App() {
  const [food, setFood] = useState(foods);

  return (
    <div className="App">
      <h1>
        <strong>IronNutrition</strong>
      </h1>
      <button
        onClick={() =>
          setFood([
            ...food,
            {
              name: 'cachupa',
              calories: 1200,
              image:
                'https://www.voltaaomundo.pt/files/2020/09/503419_BINARY_GI20120207_GONCALOVILLAVERDE_0953.jpg',
              quantity: 0,
            },
          ])
        }
      >
        Add new food
      </button>
      {food.map((dish, index) => {
        return <FoodBox key={index} {...dish} />;
      })}
    </div>
  );
}

export default App;
