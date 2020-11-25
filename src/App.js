import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import foodList from './foods.json';
import './App.css';
import Foodbox from './foodbox';
import AddFoodForm from './addfood';
import Search from './search';
import Totaleaten from './Totaleaten';

function App() {
  const [foods, setFoods] = useState(foodList);
  const [showForm, setShowForm] = useState(false);
  const [totalEaten, setTotalEaten] = useState([]);

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

  const handleTotalEaten = (input) => {
    let totalEatenCopy = [...totalEaten];
    totalEatenCopy.push(input);
    setTotalEaten(totalEatenCopy);
  };

  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <div className="foodWrapper">
        <div className="foodList">
          <Search searchFood={searchFoods} />
          {foods.map((item, index) => (
            <Foodbox key={index} food={item} addToTotal={handleTotalEaten} />
          ))}
        </div>
        <div className="rightColumn">
          <div>
            {!totalEaten.length ? '' : <Totaleaten foodTotal={totalEaten} />}
          </div>
          <div className="addFood">
            {showForm ? (
              <AddFoodForm addFood={addFoodHandler} formToggler={toggleForm} />
            ) : (
              <button class="button is-primary" onClick={() => toggleForm()}>
                Add new item to food to list
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
