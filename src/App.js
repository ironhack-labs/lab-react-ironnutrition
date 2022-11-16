import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [items, setItems] = useState(foods);

  const newFood = (created) => {
  const addFood = [created, ...items];
  setItems(addFood)
  }

  return (
    <div className="App">
      {items.map((food) => {
        return (
          <div>
            {/* <p>{food.name}</p>
            <img src={food.image} alt={food.name} /> */}
            <FoodBox food={food} />
          </div>
        );
      })}
      <AddFoodForm newFood={newFood}/>
    </div>
  );
}

export default App;
