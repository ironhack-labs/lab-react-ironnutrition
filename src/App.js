import { useState } from 'react';
import foods from "./foods.json";
import './App.css';
import FoodBox from './Components/FoodBox';
import AddFood from './Components/AddFoodForm';
import Search from './Components/search';

function App() {
  const [foodList, setFoodList] = useState(foods);

  const addNewFood = (newFood) => {
    setFoodList([...foodList, newFood]);
  };

  return (
    <div>
     <Search/>
      <AddFood addNewFood={addNewFood} />
      {foodList.map((food) => (
        <FoodBox key={food.id} food={food} />
      ))}
    </div>
  );
}

export default App;

