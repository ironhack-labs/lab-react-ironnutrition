// import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import { useState } from "react";
import './App.css';
import Search from "./components/Search"
import { v4 as uuid } from "uuid"
import FoodBox from "./components/FoodBox"
import AddFoodForm from "./components/AddFoodForm"
// import { configConsumerProps } from 'antd/lib/config-provider';

function App() {
  const [initialFoodArray] = useState(foods)
  const [foodArray, setFoodArray] = useState(foods)
   
  const deleteFood = (foodDelete) => {
    let copyFoodArray = [...foodArray]
      
   const newFoodArray = copyFoodArray.filter((food) => {
      return foodDelete !== food.name
    })
    setFoodArray(newFoodArray)
  }

  const filterFoodList = (str) => {

        if (str === "") {
            setFoodArray(initialFoodArray)
       } else {
            const filteredFood = foodArray.filter((food) => {
            return food.name.toLowerCase().includes(str.toLowerCase())
        });
        setFoodArray(filteredFood)
      }
}
  return (
    <div className="App">
      <Search filterFoodList={filterFoodList} />

     <AddFoodForm foodsArray={foodArray} setFoodArray={setFoodArray}/>
     
    <div>
      {foodArray.map((food) => { 
        
        return ( 
          <div key={uuid()}> 
            <FoodBox name={food.name} calories={food.calories}  image={food.image} servings={food.servings} deleteFood={deleteFood} /> 
          </div>
        )
      }
    )}      
    </div>
    </div>
  );
}

export default App;
