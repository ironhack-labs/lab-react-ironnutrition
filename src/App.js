import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foodsList, setFoodsList] = useState(foods);

  function handleNewFood(newFood) {
    setFoodsList((previousFoodList) => {
      const newFoodList = [newFood, ...previousFoodList];
      return newFoodList;
    });
  }

  return (
    <div className="App">
      <AddFoodForm handleNewFood={handleNewFood} />
      {foodsList.map((food) => {
        return <FoodBox food={food} />;
      })}
    </div>
  );
}
export default App;
