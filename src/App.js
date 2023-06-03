import { useState } from 'react';
import foods from './foods.json';
import './App.css';
import FoodBox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodForm';
import Search from './Components/Search';

function App() {
  const [food, setFood] = useState(foods);

  const addNewFood = (newFood) => {
    setFood([...food, newFood]);
  };

  return (
    <div className="App">
      <Search food={food} />
      <AddFoodForm addNewFood={addNewFood} />
      {food.map((food) => {
        return <FoodBox food={food} />;
      })}
    </div>
  );
}

export default App;
