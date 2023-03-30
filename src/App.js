// src/App.js
import './App.css';
import foods from "./foods.json";
import { useState } from 'react';


function App () {

  const [foodList, setFoodList] = useState (foods);

  return <div className="App">
    
        {foodList.map(food => (
          <div className="d-flex flex-row border border-dark m-1 ">
          <span>{food.name}</span>
          <img src={food.image} alt= {food.name} height={50} />
          </div>
        ))}
      
  </div>
}
export default App;
