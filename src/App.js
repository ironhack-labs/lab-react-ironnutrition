import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import AddFoodForm from './component/AddFoodForm';
import FoodBox from './component/FoodBox';
import Search from './component/Search';

function App() {
  const [foodsList, setFoodsList] = useState(foods);
  const [filteredFoodsList, setfilteredFoodsList] = useState(foods);

  function handleNewFood(newFood) {
    setFoodsList((previousFoodList) => {
      const newFoodList = [newFood, ...previousFoodList];
      return newFoodList;
    });
  }

  function handleFilterFood(keyword) {
    const filteredFoods = foodsList.filter((food) => {
      return food.name.toLowerCase().includes(keyword.toLowerCase());
    });

    setfilteredFoodsList(filteredFoods);
  }

  function handleDeleteFood(foodName) {
    const updatedFoodsList = filteredFoodsList.filter((food) => {
      return food.name !== foodName;
    });
    setfilteredFoodsList(updatedFoodsList);
  }
  return (
    <div>
      <h2>Add Food Entry</h2>
      <AddFoodForm handleNewFood={handleNewFood} />
      <Search handleFilterFood={handleFilterFood} />

      <h3>Food List</h3>
      {filteredFoodsList.map((food) => {
        return <FoodBox food={food} handleDeleteFood={handleDeleteFood} />;
      })}
    </div>
  );
}

export default App;