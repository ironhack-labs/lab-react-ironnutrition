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

const deleteFood = (foodName) => {
  const newList = foodsArr.filter (foodDetails => foodDetails.name !== foodName);
  setFoodsArr(newList);
}


  return (
    <div className="App">
   
  <AddFoodForm callbackToAdd={addFood}/>

  <Divider>Food List</Divider>

  <Row style={{ width: '100%', justifyContent: 'center' }}>

  {foodsArr.map((foodObj)=> {
    return(
      <FoodBox food={foodObj} callbackToDelete={deleteFood} />
    )
  })}
      </Row>
  
    
    </div> 
  );
}

export default App;
