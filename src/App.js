import foods from "./foods.json";
import './App.css';

import { useState } from "react";
import { Row, Divider, Button } from 'antd';
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";



function App() {
  const [foodsToDisplay, setFoodsToDisplay] = useState(foods);
  //console.log(foodsToDisplay);


  // new list = an array with the new food + all the foods we had before
  const createNewFood = (newFood) => {
    const newList = [newFood, ...foodsToDisplay];
    // update the state
    setFoodsToDisplay(newList);
  };



  return (
    <div className="App" key="App">
      {/* we send the following to the AddFoodForm.js via the callBackToCreate */}
      <AddFoodForm callBackToCreate={createNewFood} />   

      <Button> Hide Form / Add New Food </Button>

      {/* Display Search component here */}

      <Divider>Food List</Divider>
      {foodsToDisplay.map((foodObj) => (
        <FoodBox foodDetails={foodObj} />
      ))}

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
      </Row>
    </div>
  );
}

export default App;