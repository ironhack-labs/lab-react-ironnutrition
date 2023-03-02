import { Row } from "antd";
import React, {useState} from 'react'
import './App.css';
import foodsJSON from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

function App() {


  const [ allFoods, updatedList ] = useState(foodsJSON)
const [allFilterFoods, setAllFilterFoods] = useState(foodsJSON)

   const addNewFood = (food) => {
   const newFood = [food, ...allFoods]
   updatedList(newFood)
  }

  const searchFood = (str) => {
    let filteredFood
    if (str === "") {
      filteredFood = allFilterFoods
    } else {
      filteredFood = allFilterFoods.filter(food => {
        return food.name.toLowerCase().includes(str.toLowerCase())
      })
    }
    updatedList(filteredFood)
  }

  const deleteFood = (name) => {
    const foodInfo = allFoods.filter(food => {
      return food.name !== name
    })
    updatedList(foodInfo)
  }

 

  return (
    <div className="App">
      <div>

        <AddFoodForm createFood={addNewFood}/>
        <Search searchFood={searchFood}/>

        {/* {foodsJSON.map((food, i) => (
           <div key={i}>
           <p>{food.name}</p>
           <img src={food.image} width="100px"/>
           </div>))} */}
           <h2>Food List</h2>
           <Row >
            {allFoods.map((food, index )=> {
                return (
              <div className='foodlist' key={index}>
               <FoodBox food={food} deleteFood={deleteFood}/>
              </div>)})}
           </Row>


      </div>
    </div>
  );
}

export default App;
