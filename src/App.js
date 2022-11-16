import './App.css';
import React, { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';


function App() {
  const [dishes, setDishes] = useState(foods)
  const createFood = (newDishes)=>{
    const edit = [newDishes, ...dishes]
    setDishes(edit)
  }
const searchFood = (searchQuery)=>{
  const filteredFood = dishes.filter((food) => 
  food.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  setDishes(filteredFood)
}
const deleteFood = (name)=>{
  const filteredFood = dishes.filter((dishes) => dishes.name !== name);
  setDishes(filteredFood)
}



  return (
    <div className="container">
        <Search filterFood={searchFood}/>
        <AddFoodForm createFood= {createFood}/>
      <div className="App">

       { dishes.map((dish) => {
        return (
          <FoodBox food = {dish} deleteFood = {deleteFood}/>
        )
     
      })}
      </div>

  
      
    </div>
  );
}

export default App;
