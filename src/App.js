import { useState } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm'
import foods from './foods.json';

function App() {
  const [foodsState, setFoods] = useState(foods);

  return (

    <div className="App">
        <AddFoodForm />
        <FoodBox foods={foodsState} />
    </div>
  );
}

export default App;