// src/App.js
import './App.css';
import foods from './foods.json';
import React, { useState } from 'react';
import { FoodBox } from './components/FoodBox';
import AddFoodForm  from './components/AddFoodForm';
import Search from './components/Search'


function App() {
  const [food,setFood] = useState(foods)
  const [query, setQuery] = useState("")
  const filteredFood = food.filter((food) => {
    return food.name.toLowerCase().includes(query.toLowerCase());
  });
  return (
    <div>
     <AddFoodForm  food={food} setFood={setFood}/>
     <Search setQueryProp={setQuery}/>
      {filteredFood.map((elm) => {
        return (
          <div>
            <FoodBox food={elm} queryProp={query}/>
            
    </div>
          
        );
      })}
      
    </div>
  );
}

export default App;
