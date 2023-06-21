import { useState } from 'react';
import './App.css';


import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import allFoods from "./foods.json";

function App() {

  const [foods, setFoods] = useState(allFoods);

  return (
    <div className="App">
    <h1>Food List</h1>

    <AddFoodForm addFood={f => setFoods(foods => [f, ...foods])} />
    <div className='food-list'>
      {foods.map(f => <FoodBox key={f.name} food={f}/>)}

    </div>
    </div>
  );
}

export default App;
