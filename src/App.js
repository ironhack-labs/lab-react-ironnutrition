import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [food, setFood] = useState(foods);
  console.log(food)
  return (
  <div className="App">
    <AddFoodForm/>
    <Search/>
  {food.map((element) => {
    return (
      <FoodBox food={element}/>
    )
  })}
  </div>
  );
}

export default App;
