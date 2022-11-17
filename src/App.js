import './App.css';
import React, {useState} from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';


function App() {
  const [dishes, setDishes] = useState(foods)
  const [showDishes, setShowDishes] = useState(foods);

  const createFood = (newFood) => {
    const updatedFood = [newFood, ...dishes]
    setDishes(updatedFood)
  }

  const searchFood = (searchQuery) => {
    const filteredFood = dishes.filter((food) => 
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setShowDishes(filteredFood);
  }

  const deleteFood = (name) => {
    const filteredFood = dishes.filter((food) => food.name !== name);
    setDishes(filteredFood);
    setShowDishes(filteredFood);
  };

  return (
    <div className='container'>
      <Search filterFood={searchFood}/>
      <AddFoodForm createFood = {createFood} className='crtForm'/>
      <h1 className='tlt'>Food List</h1>
      <div className="App">
        {showDishes.map((dish) => {
        return (
        <FoodBox food = {dish} deleteFood={deleteFood}/>)
        })}
      </div>
   
    </div>
  );
}

export default App;
