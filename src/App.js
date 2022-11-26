import './App.css';
import React, { useState } from 'react';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Row } from 'antd';
import Search from 'antd/es/transfer/search';
import foodData from './foods.json'

function App() {
  const [foodList, setFoodList] = useState(foods)

  const addNewFood = food => {
    const foodCopy = [food, ...foodList,]
    setFoodList(foodCopy)
  }

  const searchFoods = str => {

    let searchResult = foodData.filter(food => {
      return food.name.toLowerCase().startsWith(str.toLowerCase())
    })
    setFoodList(searchResult)
  }

  const deleteFood = name => {
    const toDeleteFood = foodList.filter(food => {
      return food.name !== name
    })
  }

  return (
    <div className="App">
      <div>
        <Row>
            <AddFoodForm addNewFood={addNewFood}/>
        </Row>
        <Search searchFoods={searchFoods} />
        <h1>Food List</h1>
        <Row>
        { foodList.map((item, index) => {
          return (
            <FoodBox food={ {
              name: item.name,
              calories: item.calories,
              image: item.image,
              servings: item.servings
            }} /> 
          )
        })}
        </Row>


      </div>
    </div>
  );
}

export default App;
