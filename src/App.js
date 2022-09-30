import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search'
import {useState} from 'react'

function App() {
  const [newFoodsArray,setNewFoodsArray] = useState(foods)
  const [filteredArray,setFilteredArray] = useState(foods)
  const addNewFood = (foodObject) => {
    setNewFoodsArray([...newFoodsArray, foodObject])
  }
  const searchFood = (foodArray) => {
    setNewFoodsArray(foodArray)
  }
    const deleteFood = (foodName) => { 
        console.log(foodName)
        const filteredArray = newFoodsArray.filter(element => {
            return (
                element.name !== foodName
            )
    })
    setNewFoodsArray(filteredArray)
    }
  return (
    <div className="App">
      <AddFoodForm addNewFood={addNewFood}/>
      <Search filteredArray={filteredArray} searchFood={searchFood}/>
      <Divider>Food List</Divider>
      <Row style={{width: '100%', justifyContent: 'center'}}>
      {newFoodsArray.map(element => {
        return (
          <FoodBox food={element} deleteFood={deleteFood}/>
        )
    })}
    </Row>
    </div>
  );
}

export default App;
