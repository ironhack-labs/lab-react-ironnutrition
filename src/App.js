//import { Card, Row, Col, Divider, Input, Button } from "antd";
import allFoods from './foods.json';
import './App.css';
import { useState } from 'react';
import FoodBox from './component/FoodBox';
import AddFoodForm from './component/AddFoodForm';
import Search from './component/Search';

function App() {
  const [foods, setFoods] = useState(allFoods);
  
  const addNewFood = (newFood) => {
    const updatedFoods = [...allFoods, newFood];
 
    setFoods(updatedFoods);
  };
 
  const searchFood = (query) => {
    const filteredFood= allFoods.filter((legumes) =>
      legumes.name.toLowerCase().includes(query.toLowerCase())
    );
    setFoods(filteredFood);
  };

  const deleteFood = (foodId) => {
    const filteredFoods = allFoods.filter((legumes) => {
      return legumes.name !== foodId;
    });
    setFoods(filteredFoods);
  };

  return (
    <div className="App">
    <div>
<AddFoodForm addNewFood={addNewFood} />

    </div>
    <div>
    
      <Search searchFood={searchFood} />
      
    </div>
    <div>
      {foods.map((dish) => {
        return (
          <FoodBox deleteFood={deleteFood}
            foods={{
              
              name: dish.name,
              calories: dish.calories,
              image: dish.image,
              servings: dish.servings,
            }} 

          />
        );
      })}</div>
    </div>
  );
}

export default App;
