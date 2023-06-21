import './App.css';
import { Card, Row, Col, Divider, Input, Button } from "antd";
import foods from "./foods.json";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { useState } from 'react';


function App () {

  const [foodToDisplay, setFoodList] = useState(foods);

  const createFood = (newFood) => {
  
    console.log(newFood)
    const newFoodToDisplay = [newFood, ...foodToDisplay];

    setFoodList(newFoodToDisplay)
  }
  
  const deleteFood = (foodName) => {
    const newList = foodToDisplay.filter((foodObj)=> {
      return foodObj.name !== foodName;
    })
    setFoodList(newList);
}
// const filteredFood = (foodToDisplay.filter((foodObj) => {
//   return(
//     foodObj.toLowerCase().includes(query.toLowerCase())
//   )
// }))


return (
  <div className="App">

    <AddFoodForm callbackToCreate={createFood} />

    <Button> Hide Form / Add New Food </Button>

    {/* <Search /> */}

    <Divider>Food List</Divider>

    <Row style={{ width: '100%', justifyContent: 'center' }}>
      {foodToDisplay.map((foodObj, index) => {
          return (
            <FoodBox 
          key={index}
          food={foodObj}
          callbackToDelete={deleteFood}
          />
          );
        })}
      </Row>

    </div>
  );
}
export default App;
