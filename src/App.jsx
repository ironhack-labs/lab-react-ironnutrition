import './App.css';
import { useState } from "react";
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foodsList from './foods.json';
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import Search from "./Search";


function App() {
  const [foods, setFoods] = useState(foodsList);
  const [query, setQuery] = useState("");
  const [isShown, setIsShown] = useState(false)

  const addFood = (newFood) => {
    const updatedFoods = [...foods, newFood];
    setFoods(updatedFoods);
  };

  const filteredFoods = foods.filter(food => {
      return food.name.toLowerCase().includes(query.toLowerCase());
  });

  const deleteFood = (foodName) => {
    setFoods(foods.filter(food => food.name !== foodName))
  }


  return (
    <div className="App">
      <section className="container">
        <Search setQuery={setQuery}/>
        {!filteredFoods.length && <p>No results match the search</p>}
        <button onClick={() => setIsShown(!isShown)}>Add foods</button>
        {isShown && <AddFoodForm setFoods={setFoods} addFood={addFood}/>}
        {filteredFoods.map((food) => (
          <FoodBox food={food} deleteFood={deleteFood}/>
        ))}

      </section>
    </div>
  );
}

export default App;
