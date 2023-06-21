import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './component/FoodBox';
import AddFoodForm from './component/AddFoodForm';
import Search from './component/Search';

function App() {
  const [foodToDisplay, setFoodToDisplay] = useState(foods);

  const createFood = (newFood) => {
    const newList = [newFood, ...foodToDisplay];
    setFoodToDisplay(newList);
  };

  //Delete
  const deleteFood = (foodTitle) => {
    const listAfterDelete = foodToDisplay.filter((element) => {
      return element.name !== foodTitle;
    });
    setFoodToDisplay(listAfterDelete);
  };

  //Search
  // let searchResult = foodToDisplay
  const searchFood = (searchInput) => {
    const searchResult = foodToDisplay.filter((food) => {
      if (food.name.toLowerCase().includes(searchInput.toLowerCase()))
      {return true}
    })
    setFoodToDisplay(searchResult);
  }

  return (
    <div className="App">
      <Search callbackToSearch={searchFood}/>
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
