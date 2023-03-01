import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [food, setFood] = useState(foods);
  const [showFood, setShowFood] = useState(foods);

  const addToList = (foods) => {
    const foodCopy = [foods, ...food];
    setFood(foodCopy);
    setShowFood(foodCopy);
  };

  const searchFood = (query) => {
    const filteredFood = food.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    setShowFood(filteredFood);
  };

  const deleteFood = (foodId) => {
    const filteredFood = food.filter((manyFood) => {
      return manyFood.name !== foodId;
    });
    setShowFood(filteredFood)
  };
  return (
    <div className="App">
      <div>
        <AddFoodForm addToList={addToList} />
        <Search searchFood={searchFood} />
        <h1>Food List</h1>
        {showFood.map((food) => {
          return (
            <FoodBox
              key={food.name}
              food={{
                name: food.name,
                calories: food.calories,
                image: food.image,
                servings: food.servings,
              }}
              deleteFood={deleteFood}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
