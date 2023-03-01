// src/App.js
import './App.css';
import foods from "./foods.json";
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Searchbar from './components/Searchbar';



function App() {
  const [foodList, setFoodList] = useState(foods);

  const addFood = (food) => {
    const foodListCopy = [...foodList, food]
    setFoodList(foodListCopy)
  }

  const searchFoods = (query) => {
    const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(query.toLowerCase())
    );
    setFoodList(filteredFoods);
  };

  const deleteFoods = (foods) => {
    const deletedFoods = foods.filter((food) => {
      return food.name !== foods;
    });
    setFoodList(deletedFoods);
  };

  

  return <div className="App">



    <AddFoodForm addFood={addFood} 
    />

    {/* <Searchbar searchFoods={searchFoods} /> */}

    <Searchbar searchFoods={searchFoods} />
      {foods.map((food) => {
        return <FoodBox food={food} deleteFoods={deleteFoods} key={food.name} />;
      })}

    {foodList.map((food) => {
      return <FoodBox food={food} key={food.name}/>;
    })}





  </div>;



}

export default App;

