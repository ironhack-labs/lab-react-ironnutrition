import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';

function App() {
  const [allFood, setAllFood] = useState(foods);
  const [showFood, setShowFood] = useState(foods);

  const createFood = (food) => {
    const newFood = [food, ...foods];
    setAllFood(newFood);
    setShowFood(newFood);
  };

  const deleteFood = (name) => {
    const toDeleteFood = foods.filter((food) => food.name !== name);
    setAllFood(toDeleteFood);
    setShowFood(toDeleteFood);
  };

  const filterFood = (searchQuery) => {
    const filteredFood = allFood.filter((food) =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setShowFood(filteredFood);
  };

  return (
    <div className="App">
      <AddFoodForm createFood={createFood} />
      <SearchBar filterFood={filterFood} />

      <div>
        {showFood.map((food) => {
          return (
            <FoodBox
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
