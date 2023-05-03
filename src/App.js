import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import { Card, Row, Col, Divider, Input, Button } from "antd";
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodsArr, setFoodsArr] = useState(foods);
  const originFoodList = foods

  const addFood = newFood => {
    const updatedFoodList = [...foodsArr, newFood]

    setFoodsArr(updatedFoodList)
  }

  const search = (inputSearch) => {
    const filteredFoodList = originFoodList.filter(food => {
      return food.name.toLowerCase().includes(inputSearch)
    })


    setFoodsArr(filteredFoodList)

    if(inputSearch === "") {
    
    setFoodsArr(originFoodList)
    }
  }

  const deleteFood = (name) => {
    const filteredFoodList = foodsArr.filter(food => {
      return food.name !== name
    })

    setFoodsArr(filteredFoodList)
  }


  return (
    <div className="App">
      <Search search={search}/>
      <AddFoodForm addFood={addFood}/>
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
      {foodsArr.map((food) => (
          <FoodBox food={food} deleteFood={deleteFood}/>
        ))}
      </Row>
    </div>
  );
}
export default App;
