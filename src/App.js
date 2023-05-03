import './App.css';
import foods from "./foods.json";
import { useState } from "react";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filteredFoodList, setFilteredFoodList] = useState(foods);

  const addFood = (newFood) => {
    setFoodList([...foodList, newFood]);
    setFilteredFoodList([...filteredFoodList, newFood]);
  };

  const deleteFood = (foodName) => {
    const filteredFoodList = foodList.filter((food) => food.name !== foodName);
    setFoodList(filteredFoodList);
    setFilteredFoodList(filteredFoodList);
  };

  const filterFoods = (query) => {
    const filteredFoods = foodList.filter(food => food.name.toLowerCase().includes(query.toLowerCase()));
    setFilteredFoodList(filteredFoods);
  };

  return (
    <div className="App">
      <AddFoodForm addFood={addFood} />
      <Search filterFoods={filterFoods} />
      {filteredFoodList.map((food) => (
        <FoodBox food={food} key={food.name} deleteFood={deleteFood} />
      ))}
    </div>
  );
}

export default App;


