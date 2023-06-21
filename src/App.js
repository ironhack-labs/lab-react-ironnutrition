import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm';

function App(props) {
  const [foodsToDisplay, setFoodsToDisplay] = useState(foods);

  const addFood = (newFood) => {
    const newList = [...foodsToDisplay, newFood];
    setFoodsToDisplay(newList);
  };

  const deleteFood = (foodName) => {
    const newList = foodsToDisplay.filter((element) => {
      return element.name !== foodName;
    })
    setFoodsToDisplay(newList);
  }


  return (
    <div className="App">
      <Button> Hide Form / Add New Food </Button>

      <AddFoodForm foodsToDisplay={foodsToDisplay} addFood={addFood}/>

      {/* Display Search component here */}

      <Divider>Food List</Divider>


      <Row style={{ width: '100%', justifyContent: 'center' }}>
      {foodsToDisplay.map(function (foodObj) {
        return (
          <FoodBox foodObj={foodObj} deleteFood={deleteFood}/>
        );
      })}
      </Row>
    </div>
  );
}

export default App;
