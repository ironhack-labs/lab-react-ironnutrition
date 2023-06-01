import foodsJson from './foods.json';
import './App.css';
import { useState } from 'react';
import FoodBox from './component/FoodBox';
import AddFoodForm from './component/AddFoodForm';

function App() {
  const [foods, setFoods] = useState(foodsJson);

  return (
    <div className="App">
      <AddFoodForm foods={foods} setFoods={setFoods} />

      {foods.map((oneFood, index) => (
        <FoodBox key={index} food={oneFood} />
      ))}
    </div>
  );
}

export default App;
