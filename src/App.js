// src/App.js
import './App.css';
import foods from "./foods.json";
import { useState } from 'react';
import FoodBox from './components/FoodBox';


function App() {

  const [foodList, setFoodList] = useState(foods);

  return <div className="App">

    {foodList.map(food => (
      <div>
        <p>{food.name}</p>
        <img src={food.image} alt={food.name} width={80} />
      </div>
    ))}
    <FoodBox food={{
      name: "Orange",
      calories: 85,
      image: "https://i.imgur.com/abKGOcv.jpg",
      servings: 1
    }} />
  </div>
}
export default App;
