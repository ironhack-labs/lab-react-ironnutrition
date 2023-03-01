import React, { useState } from 'react';
import './App.css';
import foodsJSON from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFood] = useState(foodsJSON);
  const [showFood, setShowFood] = useState(foodsJSON);
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const addToList = (food) => {
    const foodCopy = [food, ...foods];
    setFood(foodCopy);
    setShowFood(foodCopy);
  };

  const searchFoods = (query) => {
    const filteredFoods = foods.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    setShowFood(filteredFoods);
  };

  const deleteFood = (foodName) => {
    const filteredFoods = foods.filter((food) => {
      return food.name !== foodName;
    });
    setFood(filteredFoods);
    setShowFood(filteredFoods);
  };

  return (
    <div className="App">
      <div className="food-list">
        <h1>Food List</h1>
        <button onClick={toggleVisibility}>
          {visible ? 'Hide Form' : 'Add New Food'}
        </button>
        {visible && <AddFoodForm addToList={addToList} />}
        <Search searchFoods={searchFoods} />
        {showFood.length ? (
          <div>
            {showFood.map((food) => (
              <FoodBox
                key={food.name}
                deleteFood={deleteFood}
                food={{
                  name: food.name,
                  calories: food.calories,
                  image: food.image,
                  servings: food.servings,
                }}
              />
            ))}
          </div>
        ) : (
          <p>Oops! There in no more content to show.</p>
        )}
      </div>
    </div>
  );
}

export default App;
