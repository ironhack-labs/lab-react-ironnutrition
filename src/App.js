import { useState } from 'react'
import foodsData from './foods.json';
import './App.css';

function App() {
  const [foods, setFoods] = useState(foodsData);
  return (
    <div className="App">
      {
        foods.map((food,i) => (
          <div key={i}>
          <p> {food.name}</p>
          <img src={food.image} width={80} alt={food.image} />
          </div>
        ))
      }
        
      
    </div>
  );
}

export default App;
