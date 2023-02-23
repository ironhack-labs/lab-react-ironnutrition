import { useState } from 'react';
import './App.css';
import foods from './foods.json';

function App() {
  const [foodList, setFoodList] = useState(foods);
  console.log(foodList.name);
  return (
    <div className="App">
      <div>
        {foodList.map((foodItem) => {
          return (
            <div key={foodItem.name}>
              <p>{foodItem.name}</p>
              <img src={foodItem.image} alt="food" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
