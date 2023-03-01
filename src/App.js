import React, { useState } from 'react';
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Searchbar from './components/Searchbar';

function App() {
  const [food, setFood] = useState(foods);
  const [alwaysFood, setAlwaysFood] = useState(foods);
  const [visible, setVisible] = useState(true);
  const [isFoodArrayEmpty, setIsFoodArrayEmpty] = useState(false);

  const addToList = (item) => {
    const foodCopy = [item, ...food];

    setFood(foodCopy);
  };

  const searchFood = (query) => {
    const filteredFood = food.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    if (filteredFood.length === 0) {
      setIsFoodArrayEmpty(true);
    }
    setAlwaysFood(filteredFood);
  };

  const deleteFood = (foodName) => {
    const filteredFood = food.filter((item) => {
      return item.name !== foodName;
    });
    setFood(filteredFood);
    setAlwaysFood(filteredFood);
  };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="App">
      <button onClick={toggleVisibility}>
        {visible ? 'Hide Form' : 'Add New Food'}
      </button>
      {visible && <AddFoodForm addToList={addToList} />}
      <Searchbar searchFood={searchFood} />

      {isFoodArrayEmpty ? (
        <p>oops ta fdd</p>
      ) : (
        alwaysFood.map((item) => {
          return (
            <div>
              <FoodBox
                key={food.name}
                food={{
                  name: item.name,
                  calories: item.calories,
                  image: item.image,
                  servings: item.servings,
                }}
                deleteFood={deleteFood}
              />
            </div>
          );
        })
      )}
    </div>
  );
}
export default App;
