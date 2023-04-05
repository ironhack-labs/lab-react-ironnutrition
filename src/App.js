import { Card, Row, Col, Divider, Input, Button } from "antd";
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import { useState } from 'react';
import AddFoodForm from './components/AddFoodForm';



function App() {
  const [listFoods, setListFoods] = useState(foods);
  console.log(foods)


  const addFood = (newFood) => {
    setListFoods(prevFood => [newFood, ...prevFood])
    console.log(newFood);
  };
  
 
  return (
    <div className="App">
      <h1>Food List</h1>

      <AddFoodForm addFood={addFood} />
      <Row>  

      {listFoods.map((food) => {
        return (
          
          <FoodBox
            food={{
          name: food.name,
          calories: food.calories,

          image: food.image,
          servings: food.servings,
        }}   
      />
      
        );
      })}
      </Row> 
     </div>
  );
}

export default App;
