import './FoodList.scss'
import FoodBox from '../FoodBox/FoodBox'
import React from 'react';



const FoodList = ({ food }) => {
    return(
        <div className=" container col-12 card-list">
        {
            food.map((food, index) => {
                return <FoodBox key={food.id} {...food }/>
            })
        }
        </div>
    )
}

export default FoodList