// src/App.js
import React from 'react';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './component/FoodBox';
import AddFoodForm from './component/AddFoodForm';
import SearchBar from './component/SearchBar';


function App() {

  const [food, setFood] = useState(foods);
  const [search, setSearch] = useState("")

  const addNewFood = (newFood) => {
    const updatedFood = [...food, newFood];

    setFood(updatedFood);
  };

  function deleteFood(foodName) {
    const filteredFood = food.filter(el => {
      console.log("name", el.name)
      console.log("foodName", foodName)
      return el.name !== foodName;
    });
    setFood(filteredFood)
  }

  const updatedFood = food.filter((el) => {
    return el.name.toLowerCase().includes(search.toLowerCase())
  })
  
  if (updatedFood.length>0){
    return (
      <div className="App">
        <SearchBar search={search} setSearch={setSearch} />
        <AddFoodForm addNewFood={addNewFood} />
        <div id="grid">
          {updatedFood.map(function (el) {
            return <FoodBox key={el.name} name={el.name} image={el.image} calories={el.calories} servings={el.servings} deleteFood={deleteFood} />
          })
          }
        </div>
      </div>
    )
  } else {
    return(
      <div className="App">
        <SearchBar search={search} setSearch={setSearch} />
        <AddFoodForm addNewFood={addNewFood} />
        <div id="grid">
          <p> ⛔️ OOPSIE, no more content here</p>
        </div>
      </div>
    )
  }
  
}

export default App;