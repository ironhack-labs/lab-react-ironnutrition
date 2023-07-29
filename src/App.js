import './App.css';
import foods from "./foods.json"
import { useState } from 'react'
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [items, setItems] = useState(foods)

  function addFood(food) {

   return setItems([food, ...items])
  }
  
  return (
     <div className="App">
      <AddFoodForm addFood={addFood} />
      {items.map(item => {
        return <FoodBox food={ item } />
      })}
    </div>
  );
}

export default App;
