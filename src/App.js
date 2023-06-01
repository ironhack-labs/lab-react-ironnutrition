import { useState } from 'react';
import './App.css';
import foodsJson from "./foods.json";

function App() {
  const [foods, setFoods] = useState(foodsJson);

  return (
    <div className="App">
      <h1>Food List</h1>
      {foods.map((foodItem) => 
        // return(
          <div className='single-food-card'>
            <p>{foodItem.name.toUpperCase()}</p>
            <img src={foodItem.image} width={300}/>
          </div>
        // );
      )}
    </div>
  );
}

export default App;
