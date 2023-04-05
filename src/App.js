import './App.css';
import { useState } from "react";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';




function App() {
 const [foodsArr, setFoodsArr]= useState(foods);

 const addFood = (newFood) => {
  setFoodsArr( (prevFoodsArr) => {
    const newList = [newFood, ...prevFoodsArr];
    return newList;
  });
}



  return (
    <div className="App">
   
  <AddFoodForm callbackToAdd={addFood}/>

  <Divider>Food List</Divider>

  <Row style={{ width: '100%', justifyContent: 'center' }}>

  <FoodBox foodsArr={foodsArr} />
      </Row>
  
    
    </div> 
  );
}

export default App;
