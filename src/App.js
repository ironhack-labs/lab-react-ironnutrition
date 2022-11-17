// src/App.js
import './App.css';
import foods from './foods.json';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {

    const [foodList, setFoodList] = useState(foods)
    
    

  return (
  
  <div className="App">
  
  <Divider>Food List</Divider>

  <Row style={{ width: '100%', justifyContent: 'center' }}>

  {foodList.map((food) => {
    return (
  <>
    {/*
    <div>  
    <p>{ food.name }</p>
    <img style={{width: 230, height: 300, margin: 10}} src={ food.image} alt="food"/>
    </div>
   */}

   <AddFoodForm addFoodForm={AddFoodForm} />

    <FoodBox key={food.name} food={ {
        name: food.name,
        calories: food.calories,
        image: food.image,
        servings: food.servings
      }} />
  </>
    )
  })}

</Row>
  </div>

  )
}


export default App;