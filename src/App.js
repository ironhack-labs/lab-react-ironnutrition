import foodsJson from './foods.json';
import './App.css';
import { useState } from 'react';
import FoodBox from './component/FoodBox';

function App() {
  const [foods, setFoods] = useState(foodsJson);

  return (
    <div className="App">
      {foods.map((oneFood, index) => (
        <FoodBox food={oneFood} />
      ))}
    </div>
  );
}

export default App;
