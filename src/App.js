import './App.css';
import React, { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFoodForm';
import SearchBar from './components/SearchBar';
import { Row, Col } from 'antd'

function App() {
  const [allFoods, setAllFoods] = useState(foods)
  
  const createFood = (newFood) => {
    const updatedFood = [newFood, ...allFoods]
    setAllFoods(updatedFood)
  }

  const searchFood = (filterfoods) => {
    const searchedFood = allFoods.filter(food => 
    food.name.toLowerCase().includes(filterfoods.toLowerCase()))
    setAllFoods(searchedFood)
  }

  



  return (
    <div className="App">
      <div className='headT'>
        <AddFood createFood={createFood} />
      </div>
      
        <SearchBar filterfoods={searchFood} />
      
        
      <Row>
        {allFoods.map((food) => {
          return (
            <FoodBox food={food} />
          )
        })}
      </Row>

    </div>
  )
}

export default App;

