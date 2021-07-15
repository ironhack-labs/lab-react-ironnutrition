import React, {useState} from 'react'
import foodData from '../foods.json'
import FoodBox from './FoodBox'
import AddFood from './NewFood';


function FoodList(){
   const [foods, setFoods] = useState(foodData)
   
   
   function addFood(newFood){
       const updatedFoodsArray = [newFood, ...foods]
       setFoods(updatedFoodsArray)

    }

    return(
        <div className='div'>
            <ul>
                <li><AddFood addFoodHandler={addFood} /></li>
                <li>{foods.map((food, index)=>{
                    return(
                        <FoodBox key={index} food={food} />
                    )
                })}</li>
            </ul>
        </div>

    )
}


export default FoodList;