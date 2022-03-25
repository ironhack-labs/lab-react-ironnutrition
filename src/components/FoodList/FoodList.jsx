import './FoodList.scss'
import FoodBox from '../FoodBox/FoodBox'
import React from 'react';


const FoodList = ({ food }) => {
    return(
        <div className="col-6">
        {
            food.map((food, index) => {
                return <FoodBox key={index} {...food }/>
                    
            })
        }
        </div>
    )
}

export default FoodList