import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import FoodBox from './FoodBox/FoodBox';
import AddFoodForm from './AddFoodForm/AddFoodForm';
import Search from './Search/Search';
import {useState} from 'react'

const allFoods = foods;

function App() {
  const [foodArr, setFoodArr] = useState(allFoods)
  const [displayFoods, setDisplayFoods] = useState(allFoods);


  const createFood = (newFood) => {
    console.log(newFood)
    const newFoodArray = [newFood, ...foodArr];
    setFoodArr(newFoodArray);
    console.log(newFoodArray)
    setDisplayFoods(newFoodArray);
  }

  const searchFunc = (foodName) => {
    let filteredFoods = foodArr.filter((elem) => elem.name.toLowerCase().includes(foodName.toLowerCase()))
    setDisplayFoods(filteredFoods)
  }

  const deleteFood = (foodName) => {
    let filteredfoods = foodArr.filter((elem) => elem.name !== foodName)
    setFoodArr(filteredfoods)
    setDisplayFoods(filteredfoods)
  }

  return (
    <div className="App">
    <Search searchQuery={searchFunc}/>
    <FoodBox foodInfo={displayFoods} deleteFunc={deleteFood} />
    <AddFoodForm createFoodFunc={createFood} />
    </div>
  );
}

export default App;
