import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import React, { useState } from 'react';

function App() {
  const [foodArr, setFoodsArr] = useState(foods)
  
  const deleteFood = (foodName) => {
    const oneLess = foodArr.filter((food) => {
      return food.name !== foodName
    })
    setFoodsArr(oneLess)
  }

  const foodsDiv = foodArr.map((food) => {
    return <FoodBox deleteFoodHandler={deleteFood} food={
    food} />;
  });


  const newFoodHandler = (newFood) => {
    const foodCopy = [...foodArr]
    foodCopy.push(newFood)
    setFoodsArr(foodCopy)
  }

  const searchHandler = (search) => {
    if(search === ""){
      setFoodsArr(foods)
    }else{
    const rSearch = foodArr.filter((food) => food.name.toLowerCase().includes(search))
    setFoodsArr(rSearch)  // help 
    }
  }



  return (
  <div className="App">
    <h1>Food List</h1>
    <AddFoodForm addFood={newFoodHandler}/>
    <Search onSearch={searchHandler}/>
    {foodsDiv}
  </div>
  )
}

export default App;
