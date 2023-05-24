/* eslint-disable no-undef */
import { useState } from 'react';
import foods from "./foods.json";
import './App.css';
import FoodBox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodForm';
import Search from './Components/Search';



function App() {
  const [foodList, setFoodList] = useState(foods);
  const [filteredFoodList, setFilteredFoodList] = useState(foods);

  const handleDelete = (index) => {
    const updatedFoodList = [...foodList];
    updatedFoodList.splice(index, 1);
    setFoodList(updatedFoodList);
    setFilteredFoodList(updatedFoodList);
  };

  const handleAddFood = (newFood) => {
    setFoodList([...foodList, newFood]);
    setFilteredFoodList([...foodList, newFood]);
  };

  const handleSearch = (searchTerm) => {
    const filteredFoods = foodList.filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFoodList(filteredFoods);
  };
 
  return (
    <div>
    <div>
    <Search handleSearch={handleSearch} />
    </div>
      <div>
        <AddFoodForm/>
      </div>
      {foodList.map((food) => (
        <div>
         <FoodBox key={food.id} food={food}/>
        </div>
      ))}

      <div>
        <FoodBox food={{
          name: "Orange",
          calories: 85,
          image: "https://i.imgur.com/abKGOcv.jpg",
          servings: 1
        }} />
      </div>

    </div>
    
  );
}


export default App; 
