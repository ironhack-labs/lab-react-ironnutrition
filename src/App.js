import './App.css';
import foods from './foods.json';
import React, {useState} from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Row } from 'antd';

function App() {
  const [dishes, setDishes] = useState(foods)

  const [showFood, setShowFood] = useState(foods);

  const createFood = (food) => {
    const newFood = [food, ...dishes];
    setDishes(newFood);
    setShowFood(newFood);
  };

  const filterFood = (searchQuery) => {
    let filteredFood = dishes.filter((food) =>
      food.name.toLowerCase().includes(searchQuery.toLowerCase()));

    setShowFood(filteredFood);
  };

 

  
  return (
    <div className="App">
      
      <AddFoodForm createFood={createFood} /> 
      <Search filterFood={filterFood} /> 


      <Row>
      {showFood.map((dish) => {
        return (
          <FoodBox food={dish}/>      
            ) } )}
      </Row>      
    </div>
  );
}

export default App;
