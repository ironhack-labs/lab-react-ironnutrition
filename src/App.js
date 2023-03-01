import React, { useState } from 'react';
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import FoodBox from './componentes/FoodBox';
import AddFoodForm from './componentes/AddFoodForm';
import Search from './componentes/Search';

function App() {
  const [food, setFood] = useState(foods);
  const [showFood, setShowFood] = useState(food);
  const [visible, setVisible] = useState(true);
  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const addToList = (item) => {
    const foodCopy = [item, ...food];
    foodCopy.push(food);
    setFood(foodCopy);
  };

  const deleteFood = (foodName) => {
    const filteredFood = food.filter((food) => {
      return food.name !== foodName;
    });
    setFood(filteredFood);
    setShowFood(filteredFood);
  };

  const searchFood = (query) => {
    const filteredFood = food.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
    setShowFood(filteredFood);
  };
  const checkNoFood = () =>{
    if(!showFood.length) return "https://thumbs.dreamstime.com/z/oops-page-not-found-design-isometric-template-website-page-flat-d-red-road-icon-sign-isolated-white-background-oops-page-147896664.jpg" 
  }
  return (
    <div className="App">
      
      {visible && <AddFoodForm addToList={addToList}/>}
      <button onClick={toggleVisibility}>{visible ? 'Hide Form' : 'Add New Food'} list</button>
      <Search searchFood={searchFood} />
      {showFood.map((item) => {
        return <FoodBox food={item} deleteFood={deleteFood} key={food._id} />;
      })}
      <img src={checkNoFood} alt="" />
    </div>
  );
}
export default App;
