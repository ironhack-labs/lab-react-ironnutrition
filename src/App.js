import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import { useState } from 'react';

function App() {
  const [listFoods, setListFoods] = useState(foods);
  const addFood = (food) => {
    setListFoods([food, ...listFoods]);
  };
  return (
    <div>
      <AddFoodForm addFood={addFood} />
      <div className="d-flex flex-wrap">
        {foods.map((food, i) => {
          return (
            <FoodBox
              key={i}
              food={{
                name: food.name,
                calories: food.calories,
                image: food.image,
                servings: food.servings,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
