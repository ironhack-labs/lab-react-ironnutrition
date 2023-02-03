import { useState } from 'react';
import './App.css';
import foods from './foods.json'
import { FoodBox, AddFoodForm } from './components';

function App() {
  const [foodList, setFoodList] = useState(foods);
  return (
    <div className="App">
      <AddFoodForm />
      <h2>Food List</h2>
      {
        foodList.map((food,index_food)=> (
      <FoodBox 
          key={index_food}
          {...food}
      />
        ))
      }
    </div>
  );
}

export default App;
