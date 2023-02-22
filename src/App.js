// src/App.js
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [food, setFood] = useState(foods);
  const [foodData, setFoodData] = useState(foods);

  const addNewFood = (newFood) => {
    const updatedFood = [...food, newFood];

    setFood(updatedFood);
  };

  const searchForFood = (input) => {
    let filteredFood;
    input === ''
      ? (filteredFood = foodData)
      : (filteredFood = foodData.filter((item) =>
          item.name.toLocaleLowerCase().includes(input)
        ));

    setFood(filteredFood);
  };

  

  return (
    <div className="App">
      <h1>Food List</h1>
      <AddFoodForm addNewFood={addNewFood} />
      <Search searchForFood={searchForFood} />
      <div className="container">
        {food.map((item) => {
          return <FoodBox food={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
