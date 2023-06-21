import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './component/FoodBox';
import AddFoodForm from './component/AddFoodForm';




function App() {

  const [foodToDisplay, setFoodToDisplay] = useState(foods.slice(0, 5));

  const createFood = (newFood) => {
    const newList = [newFood, ...foodToDisplay];

    // update state
    setFoodToDisplay(newList);
  }

  const deleteFood = (foodTitle) => {

    const listAfterDelete = foodToDisplay.filter((element) => {
      return element.name !== foodTitle;
    });

setFoodToDisplay(listAfterDelete);

  }

  return (
    <div className="App">
      <AddFoodForm callbackToCreate={createFood}/>

      {foodToDisplay.map((food) => {
        return (
        <FoodBox oneFood={food}
        callbackToDelete={deleteFood}/>
        );
      })}
    </div>
  );
}

export default App;
