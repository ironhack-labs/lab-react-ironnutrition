// src/App.js
import './App.css';
import foods from './foods.json';
import { useState } from 'react';

function App() {
  const [food, setFoods] = useState([...foods]);

  const foodList = food.map((foodItem) => {
    return (
      <div>
        <p> {foodItem.name} </p>
        <img src={foodItem.image} alt="pics of food" width={150} />
      </div>
    );
  });

  return (
    <div className="App">
      <h1>Food List</h1>
      {foodList}
    </div>
  );
}
export default App;
