// src/App.js
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import FilterFood from './components/FilterFood';

function App() {
  const [foodsArr, setFoodsArr] = useState(foods);
  const [foodsData, setFoodsData] = useState(foods);
  const addNewFood = (newFood) => {
    const updatedFood = [...foodsArr, newFood];

    setFoodsArr(updatedFood);
  };

  const deleteFood = (name) => {
    const filteredFoods = foodsArr.filter((food) => {
      return food.name !== name;
    });

    const filteredFoodsData = foodsData.filter((food) => {
      return food.name !== name;
    });

    setFoodsArr(filteredFoods);
    setFoodsData(filteredFoodsData);
  };

  const filterFoodList = (str) => {
    let filteredFoods;
    if (str === '') {
      filteredFoods = foodsData;
    } else {
      filteredFoods = foodsData.filter((food) => {
        return food.name.toLowerCase().includes(str);
      });
    }
    setFoodsArr(filteredFoods);
  };

  return (
    <div className="App">
      <FilterFood filterFood={filterFoodList} />
      <AddFoodForm addFood={addNewFood} />
      {foodsArr.map((item) => {
        return (
          <div>
            <FoodBox food={item} deleteFood={deleteFood} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
