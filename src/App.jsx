import { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import './App.css';

function App() {
  const [foodList, setFoodList] = useState(foods);

  const handleSubmit = (value) => {
    setFoodList((prev) => [value, ...prev]);
  };

  return (
    <div className="App">
      <AddFoodForm addFood={handleSubmit} />

      {foodList?.map((food, i) => (
        <FoodBox key={i} food={food} />
      ))}
    </div>
  );
}

export default App;
