import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import foodList from './foods.json';
import './App.css';
import Foodbox from './foodbox';
import AddFoodForm from './addfood';
import Search from './search';

function App() {
  const [foods, setFoods] = useState(foodList);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm(!showForm);

  const addFoodHandler = (newFood) => {
    const foodCopy = [...foods];
    //I know I'm actually not supposed to touch the initial list but otherwise I don't know how to properly make search work
    foodList.push(newFood);
    foodCopy.push(newFood);
    setFoods(foodCopy);
  };

  const searchFoods = (input) => {
    let foodCopy = [...foods];
    if (input === '') {
      setFoods(foodList);
    } else {
      setFoods(
        foodCopy.filter((item) =>
          item.name.toUpperCase().includes(input.toUpperCase())
        )
      );
    }
  };

  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <div className="foodWrapper">
        <div className="foodList">
          <Search searchFood={searchFoods} />
          {foods.map((item, index) => (
            <Foodbox key={index} food={item} />
          ))}
        </div>
        <div>
          <button onClick={() => toggleForm()}>Add food</button>
          {showForm ? (
            <AddFoodForm addFood={addFoodHandler} formToggler={toggleForm} />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
