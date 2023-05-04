// src/App.js
import './App.css';
import foods from "./foods.json";
import { useState } from 'react';

function App () {
  const [foodList, setFoodList] = useState (foods);

  return <div className="App">
    {foodList.map((food) => (
        <div key={food.id}>
          <p>{food.name}</p>
          <img src={food.image} alt={food.name} width={100} />
        </div>
     ))}

  </div>;

}
 export default App;