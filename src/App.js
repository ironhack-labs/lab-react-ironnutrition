import './App.css';
import { useState } from "react";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import SearchForm from './components/SearchForm';




function App() {
 const [foodsArr, setFoodsArr]= useState(foods);
 const [query, setQuery]= useState("");

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


const filteredFoods = foodsArr.filter((food) =>
  food.name.toLowerCase().includes(query.toLowerCase())
); 

  return (
    <div className="App">
   
  <AddFoodForm callbackToAdd={addFood}/>
  <br />
  <SearchForm setQuery={setQuery}/>

  <Divider>Food List</Divider>

  <Row style={{ width: '100%', justifyContent: 'center' }}>
  {filteredFoods.length === 0 ? <img src="https://cdn.dribbble.com/users/683081/screenshots/2728654/media/7bb2b47d0574d39b20354620e4fa50c8.png?compress=1&resize=400x300&vertical=top" alt="" />
       :
  filteredFoods.map((foodObj)=> {
    return(
      <FoodBox food={foodObj} callbackToDelete={deleteFood} />)})}

      </Row>
  
    
    </div> 
  );
}

export default App;
