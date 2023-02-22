// src/App.js
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';

function App() {
  const [food, setFood] = useState(foods);

  return (
    <div className="App">
      <h1>Food List</h1>
      <div className="container">
        {food.map((item) => {
          return <FoodBox food={item} />;
        })}
      </div>
    </div>
  );
}
export default App;
