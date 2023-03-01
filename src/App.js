import { useState } from 'react';
import './App.css';

import foods from './foods.json';

import FoodBox from './components/FoodBox';
import AddNewFood from './components/AddNewFood';
import Searchbar from './components/Searchbar';

function App() {
  const [food, setFood] = useState(foods);
  const [showFood, setShowFood] = useState(foods);
  /* console.log(foods) */
  const addToList = (foods) => {
    const foodCopy = [foods, ...food];
    setShowFood(foodCopy);
  };

  const searchFoods = (query) => {
    const filteredFoods = foods.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    setShowFood(filteredFoods);
  };

  const deleteFood = (name) => {
    const filteredFoods = foods.filter((food) => {
      return food.name !== name;
    });
    setShowFood(filteredFoods);
  };

  return (
    <div className="App">
      <AddNewFood addToList={addToList} />
      <Searchbar searchFoods={searchFoods} />

      {showFood.map((food) => {
        return <FoodBox food={food} deleteFood={deleteFood} key={food.name} />;
      })}

      <h1>food list</h1>
      {showFood.map((food) => {
        return (
          <FoodBox
            food={{
              name: food.name,
              calories: food.calories,
              image: food.image,
              servings: food.servings,
            }}
          />
        );
      })}
      <hr />
    </div>
  );
}
export default App;
