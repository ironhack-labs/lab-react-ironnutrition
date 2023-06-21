import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import logo from './logo.svg';
import foods from './foods.json';
import './App.css';
import { Row, Divider, Button } from 'antd';

function App() {
  const [foodsToDisplay, setFoodsToDisplay] = useState(foods);


  const deleteFood = (foodName) => {
    const newList = foodsToDisplay.filter((element)=>{
      return element.name !== foodName;
    });
    setFoodsToDisplay(newList);
  }

  const createFood = (newFood) => {
    const newList = [newFood, ...foodsToDisplay];
    setFoodsToDisplay(newList);
  }

return (
  <div className="App">
    <Divider>Food List</Divider>
    <Row gutter={[16, 16]} justify="center">
    {foodsToDisplay.map((foodObj, index) => (
  <FoodBox
    key={index}
    foodDetails={foodObj}
    callBackToDelete={() => deleteFood(foodObj.name)} //need to pass the arguement!
  />
      ))}
    </Row>

    <AddFoodForm callBackToCreate = {createFood} />
  </div>
);
}

export default App;
