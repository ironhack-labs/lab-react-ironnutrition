import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import foodList from './foods.json';
import './App.css';
import Foodbox from './foodbox';
import AddFoodForm from './addfood';
import Search from './search';
import TotalEaten from './Totaleaten';

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

    if (totalEatenCopy.filter((item) => item.name === input.name).length > 0) {
      let index = totalEatenCopy.findIndex((item) => item.name === input.name);
      totalEatenCopy[index].quantity =
        Number(totalEatenCopy[index].quantity) + Number(input.quantity);

      totalEatenCopy[index].calories =
        Number(totalEatenCopy[index].calories) + Number(input.calories);
    } else {
      totalEatenCopy.push(input);
    }

    setTotalEaten(totalEatenCopy);
  };

  const deleteEatenItem = (index) => {
    let totalEatenCopy = [...totalEaten];
    totalEatenCopy.splice(index, 1);

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
            {!totalEaten.length ? (
              ''
            ) : (
              <TotalEaten
                foodTotal={totalEaten}
                deleteHandler={deleteEatenItem}
              />
            )}
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
