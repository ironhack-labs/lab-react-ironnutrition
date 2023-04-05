
import { useState } from 'react';
import './App.css';
import foods from "./foods.json";
import Foodbox from "./component/FoodBox";
import { Row, Divider, Button } from 'antd';
import AddFoodForm from './component/AddFoodForm';
function App() {

  const [foodsArr, setFoodsArr] = useState(foods);
  const addFood = (newFood) => {
    console.log(newFood);

    setFoodsArr((prevFoodsArr) => {
      return [newFood, ...prevFoodsArr];
    })

  }

  return (
    <div className="App">
      <AddFoodForm addFood={addFood} />
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodsArr.map((foodsDetails, index) => {
          return <Foodbox foodsDetails={foodsDetails} key={index} />
        })
        }
      </Row>
    </div>
  );
}

export default App;
