// src/App.js
import './App.css';
import { Row, Divider, Button } from 'antd';
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import { useState } from 'react';
import AddFoodForm from "./components/AddFoodForm"



function App() {

  const [foodList, setFoodList] = useState(foods)
  
  
  const addFood = (newFood) => {
    const updatedFoods = [...foodList, newFood]

    setFoodList(updatedFoods)
  }

  return (
    <div className="App">
      {/* Display Add Food component here */}

      {/* <Button> Hide Form / Add New Food </Button> */}

      {/* Display Search component here */}

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodList.map(food =>
          <FoodBox key={food._id} food={food}/>
          )}
        </Row>
        <AddFoodForm addFood={ addFood }/>

    </div>
  );
}

export default App;
