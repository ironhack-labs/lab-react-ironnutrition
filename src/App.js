import { useState } from 'react';
import './App.css';
import foods from './foods.json';

function App() {
  const [foodList, setFoodList] = useState(foods);
  return (
    <div>
      {foodList.map((food) => {
        return (
          <div>
            <p>{food.name}</p>
            <img src={food.image} alt={food.name} width={100} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
