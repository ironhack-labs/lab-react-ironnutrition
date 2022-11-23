import './App.css';
import foods from './foods.json'
import React, { useState } from 'react';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import FoodBox from './component/FoodBox';
import AddFoodForm from './component/AddFoodForm';

function App() {
  const [foodArr, setFoodArr] = useState(foods)

  const addFood = food => {
    let foodsCopy =  [...foodArr, food]
    setFoodArr(foodsCopy)
  }





  return (
      <div className="App">
        <fieldset><legend>Add Food Entry</legend>
          <AddFoodForm addFood={addFood}/>
        </fieldset>
        <fieldset className='food-list'><legend>Food List</legend>
          { foodArr.map(food => {
            return (
              <FoodBox food={food}/>
            )
          }) }
        </fieldset>
      </div>
  );
}

export default App;
