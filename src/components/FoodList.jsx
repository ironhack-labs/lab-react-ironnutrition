import React from 'react'
import foodsJson from "../foods.json"
import FoodBox from "./FoodBox";
import { useState } from 'react'
import AddFoodForm from "./AddFoodForm";
import SearchBar from './SearchBar';
import NoItems from './NoItems';

const FoodList = () => {
    const [food, setFood] = useState(foodsJson)
    const handleClick = (id) => {
        const deleted = food.filter(item => item.id !== id)
        setFood(deleted)
        
    }
    return (
        <div>
            <h1>LAB | React IronNutrition</h1>
            <AddFoodForm onSubmit = {setFood}/>
            <SearchBar onSearch = {setFood}/>
            <div>
                <h4>
                    Food List
                </h4>
            </div>
            
            <div className='list-style'>{!food.length && <NoItems/>}
            {food.map(item => (
                <FoodBox key={item.id} {...item} onClick={handleClick} />
            ))
            }
            </div>
        </div>
    )

}

export default FoodList



