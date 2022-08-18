import { useState } from 'react';
import './App.css';
import foodData from './foods.json';
import FoodList from './components/FoodList';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/search';


function App() {
  const [foods, setFoods] = useState(foodData)
  const [searchFood, setSearchFood] = useState(foods);
  const [displayFood, setDisplayFood] = useState(foods);
  const [showForm, setShowForm] = useState(true);
  
  const createdFood = (food) => {
  const updatedFoods = [food, ...displayFood];
    setDisplayFood(updatedFoods);
  };
    const searchFood = (search) => {
      let filteredFoods = foods.filter((food =>
        food.name.toLowerCase().includes(search.toLowerCase()))
      );
      setDisplayFood(filteredFoods);
    };
  
    const deleteFood = (foodName) => {
      let filteredFoods = displayfood.filter(food =>
      food.name !== foodName);
      };
      setDisplayFood(filteredFood);
    };
  return (
    <div className="App">
      <h2>Food list</h2>      
    <AddFoodForm />  
    <FoodList foods = {foods}/>
    <AddFood createFood={createFood} />
    <Search />


    </div>
  );

export default App;
