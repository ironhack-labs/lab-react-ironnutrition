// src/App.js
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foodsArr, setFoodsArr] = useState(foods);
  const addNewFood = (newFood) => {
    const updatedFood = [...foodsArr, newFood];

    setFoodsArr(updatedFood);
  };

  return (
    <div className="App">
      <AddFoodForm addFood={addNewFood} />
      {foodsArr.map((item) => {
        return (
          <div>
            <FoodBox
              food={{
                name: item.name,
                calories: item.calories,
                image: item.image,
                servings: item.servings,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
