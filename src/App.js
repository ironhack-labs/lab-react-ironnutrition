
import './App.css';
import { useState } from 'react';
import foodData from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/addFoodForm';
import Searchbar from './components/Search';
/* import { Card, Row, Col, Divider, Input, Button } from 'antd'; */


function App() {
  const [foods, setFoodData] = useState(foodData)
  const [searchedFoods, setSearchFoods] = useState(foodData)

  const createdFood = (newFood) => {
    const updatedFood = [newFood, ...foods]
      setFoodData(updatedFood)
      setSearchFoods(updatedFood)
  }

const filterFood =(search) =>{
  let foodSearch = foods.filter((eachFood) =>
  eachFood.name.toLowerCase().includes(search.toLowerCase())
);

setSearchFoods(foodSearch)
}

const deletedFood =(deleted) =>{
  let foodDeleted = foods.filter((eachFood) => eachFood.name !== deleted
  
);

setSearchFoods(foodDeleted)
setFoodData(foodDeleted)
}

    return (
      <div className="App">

  <Searchbar filterFood={filterFood}/>

  <AddFood createdFood={createdFood}/>
        {searchedFoods.map((eachFood)=>{
          return (
  <FoodBox food={eachFood} deletedFood = {deletedFood}/>
          ) })}
  
  


      </div>
    );
  }

  
  export default App;