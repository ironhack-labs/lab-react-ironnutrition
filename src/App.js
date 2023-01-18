import foods from './foods.json';
import './App.css';
import FoodBox from "./component/FoodBox"
import { useState } from 'react';
import AddFoodForm from './component/AddFoodForm';
import Search from './component/Search';
function App() {
  const [foodsArr, setFoodsArr] = useState(foods)  
  const [searchQuery, setSearchQuery] = useState("");

  const foodsToDisplay = foodsArr.filter((food) => {
    return food.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const createFood = (newfoodObj) =>{
   setFoodsArr((prevFoodArr) => {
   const newArr = [newfoodObj, ...prevFoodArr];
   return newArr;
   }) 
  }
  const deleteFood = (foodName) => {
     const newListOfFood = foodsArr.filter((food) => {
       return food.name !== foodName;
     })
     setFoodsArr(newListOfFood)
  }

  return (
  <div className="App">
    <AddFoodForm createFood={createFood} />
    <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
    {foodsToDisplay.map((food) => {
      return (      
      <FoodBox food={food} deleteFood={deleteFood} key={food.name}/>
      )
    })}



  </div>
  )
}
export default App;