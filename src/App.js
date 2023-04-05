import foodsArr from './foods.json';
import './App.css';

// useState IMPORT
import { useState } from 'react';

// ANTD IMPORTS
import { Row, Divider, Button } from 'antd';

// COMPONENTS IMPORTS
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {

  // stateful var initialized to the original array of foods
  const [foods, setFoods] = useState(foodsArr);

  // function to handle submissions 
  const addFood = (newFood) => {
    setFoods((prevFoodsArr) => {
      const newFoodArr = [newFood, ...prevFoodsArr];
      return newFoodArr;
    })
  }

  return (
    <div className="App">

      <AddFoodForm addFood={addFood} />

      <Divider>{"Food List"}</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foods.map((foodObj) => {
          return (
            <FoodBox foodObj={foodObj} />
          )
        })}
      </Row>

    </div>
  );
}

export default App;
