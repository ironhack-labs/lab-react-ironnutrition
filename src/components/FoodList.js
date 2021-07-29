import React, {useState} from 'react'
import foodData from '../foods.json'
import FoodBox from './FoodBox'
import AddFood from './NewFood';
import SearchBar from './SearchBar';


function FoodList(){
   const [foods, setFoods] = useState(foodData)


   function addFood(newFood){
       const updatedFoodsArray = [newFood, ...foods]
       setFoods(updatedFoodsArray)

    }

    function searchFoods(searchTerm){
        let filteredFoods = foods.filter(foodItem => {
            return foodItem.name.includes(searchTerm)
        })
        setFoods(filteredFoods)

    }

    return(
        <div className='div'>
            <SearchBar searchHandler={searchFoods}/>
            <AddFood addFoodHandler={addFood} />
            <ul>
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