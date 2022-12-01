// src/App.js
import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './FoodBox';
import { Row } from 'antd';
import AddFoodForm from "./AddFoodForm";
import SearchField from "./SearchField";

function App() {
  const fiveFood = foods.slice(0, 5);
  const [foodsList, setFoods] = useState(fiveFood);
  const [query, setQuery] = useState("")


  return (
    <div className="App"> 
    <h1>Search</h1>     
    <SearchField setQuery={setQuery} query={query} />
    <AddFoodForm setFoods={setFoods} foodsList={foodsList}  /> 
        <h1>Food List</h1>
        <div className='container'>       
           {foodsList
                    .filter(food => food.name.toLowerCase().includes(query.toLowerCase()))
                    .map(food => 
   <FoodBox food={food} />
        )}
        </div>

    </div>
  );
}

export default App;