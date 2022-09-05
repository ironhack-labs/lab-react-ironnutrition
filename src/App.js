// src/App.js
import React from 'react';
import './App.css';
import foods from './foods.json';
import {useState} from 'react';
/*import Food from './component/Food';*/
import FoodBox from './component/FoodBox';
import AddFoodForm from './component/AddFoodForm';
import SearchBar from './component/SearchBar';


function App() {

  const [food, setFood] = useState(foods);
  const [search, setSearch] = useState("")

  const addNewFood = (newFood) => {
    // Create a new array
    const updatedFood = [...food, newFood];
   
    setFood(updatedFood);
  };

  const updatedFood = food.filter((el) => {
    return el.name.includes(search)
  })

  return (
  <div className="App">
    <SearchBar search={search} setSearch={setSearch} />
    <AddFoodForm addNewFood={addNewFood}/>
    {updatedFood.map(function(el) {
     return <FoodBox key={el.name} name={el.name} image={el.image} calories={el.calories} servings={el.servings}/> })
    }
    {/*<FoodBox food={ {
      name: "Orange",
      calories: 85,
      image: "https://i.imgur.com/abKGOcv.jpg",
      servings: 1
    }} />*/}
  </div>
  )
}

export default App;