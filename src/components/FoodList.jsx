import foodsJson from '/src/foods.json'
import { useState } from 'react';
import FoodBox from './FoodBox';
import AddFoodForm from '/src/components/AddFoodForm.jsx'
import Search from './Search';
import EmptyFood from './EmptyFood';
function FoodList(){
    const [foodArr, setFoodArr] = useState(foodsJson) ;
    const [searchVal, setSearchVal] = useState("");
    const foodMap = foodArr.map((food, index)=>{
      return <FoodBox key={index} food={food} remove={removeFood} searchVal={searchVal}/>
    })

    function removeFood(foodId){
      setFoodArr(prevArr =>prevArr.filter(entry=>entry.id !== foodId))
    }
    function addMeal(foodObj){
      setFoodArr(prevArr =>[foodObj, ...prevArr])
    }

    function displayMeals(searchVal){
      setSearchVal(searchVal)
    }
    return (
      <div className="App">
        <h1>LAB | React IronNutrition</h1>
        <AddFoodForm addMeal={addMeal}/>
        <Search displayMeals={displayMeals}/>
        <div id="food-container">
          {foodArr.length > 0 ? foodMap : <EmptyFood />}
        </div>
      </div>
    );
}

export default FoodList