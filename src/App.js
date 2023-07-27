import React, {useState} from 'react';
import './App.css';
import foods from './foods.json';

function App() {
  const [allFoods, setAllFoods] = useState(foods);

  return (
    <div className="App">
      {allFoods.map((food) => (
        <div key={food.id}>
          <p>{food.name}</p>
          <img src={food.image} alt={food.name} width={100} />
        </div>
      ))}
    </div>
  );
}

export default App;
