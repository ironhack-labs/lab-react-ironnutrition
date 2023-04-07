import { useState } from 'react';
import foodsDB from './foods.json';

function App() {

  const [foods, setFoods] = useState(foodsDB);

  return (
    <div className="App">
      {foods.map((food) => (
        <div>
          <p>{food.name}</p>
          <img src={food.image} alt={`${food.name} img`} width={100} />
        </div>
      ))}
    </div>
  );
}
export default App;
