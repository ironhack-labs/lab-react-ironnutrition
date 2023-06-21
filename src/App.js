import { useState } from 'react';
import './App.css';


import FoodBox from './components/FoodBox';
import allFoods from "./foods.json";

function App() {

  const [foods, setFoods] = useState(allFoods);

  return (
    <div className="App">
    <h1>Food List</h1>

    <div className='food-list'>
      {foods.map(f => <FoodBox key={f.name} food={f}/>)}

      <FoodBox food={ {
        name: "Orange",
        calories: 85,
        image: "https://i.imgur.com/abKGOcv.jpg",
        servings: 1
      }} />
    </div>
    </div>
  );
}

export default App;
