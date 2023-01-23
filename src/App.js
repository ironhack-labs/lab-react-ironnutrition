import { useState } from 'react';
import './App.css';
import foods from './foods.json';

function App() {
  const [foodsList, setFoodsList] = useState(foods);

  return (
    <div className="App">
      {foodsList.map((foodItem) => {
        return (
          <div>
            <p> {foodItem.name}</p>
            <img src={foodItem.image} alt="food" width="150px" />
          </div>
        );
      })}
    </div>
  );
}
export default App;
