import { useState } from 'react';
import foodsJson from '../foods.json'
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';


function FoodList(){
    const [foods, setFoods] = useState(foodsJson);
    const addNewFood = (newFood)=>{
        const updatedFood = [...foods, newFood];
        setFoods(updatedFood);
    }


    const deleteFood = (foodId)=>{
        const foodsCopy = [...foods];
    foodsCopy.forEach((food, index)=>{
        if(food.id == foodId){
            foodsCopy.splice(index, 1);
        }
    })
    setFoods(foodsCopy);
  } 

  return(
    <div>
        <AddFoodForm addNewFood={addNewFood}/>
        <hr></hr>
        <div className="food-list">
            {foods.map((food)=>{
                return(<FoodBox key={food.id} food={food} clickToDelete={deleteFood}/>)
            })}
        </div>
    </div>
  )
}

export default FoodList;