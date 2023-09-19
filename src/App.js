import foodData from './foods.json';

import './App.css';
import { useState } from 'react';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import FilteredFood from './FilteredFood';



function App() {
  const [foodState, setFoodState] = useState(foodData)
  const [filteredFoods, setFilteredProducts] = useState([])
  function addNewFood(newFood) {
    const updatedFood = [...foodState, newFood]
    setFoodState(updatedFood)
  }
  const workSearch = (filteredFoods) => {
   
    setFilteredProducts(filteredFoods);
  };
  function deleteFoodItem(name) {
    const updatedFood = foodState.filter((food) => food.name !== name);
    setFoodState(updatedFood);
  }
  return (
    <div className="App">
      
      <FilteredFood foodState={foodState} onSearch={workSearch} filteredProducts={filteredFoods}></FilteredFood>
      <AddFoodForm addNewFood={addNewFood}></AddFoodForm>
      {foodState.map((oneFood)=>{
        return(
            <div key={oneFood.name}>
              
            
              
                <FoodBox food={oneFood} onDelete={deleteFoodItem}></FoodBox>
                
            </div>
            
        )
      })}
    </div>
  );
}

export default App;
