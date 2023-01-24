import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

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
    <div className="App">
      <h2>Add Food Entry</h2>
      <AddFoodForm handleNewFood={handleNewFood} />

      <Search handleFilterFood={handleFilterFood} />

      <h2>Food List</h2>
      {filteredFoodsList.map((food) => {
        return <FoodBox food={food} handleDeleteFood={handleDeleteFood} />;
      })}
    </div>
  );
}
export default App;
