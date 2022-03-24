import React from 'react';
import FoodItem from '../FoodItem/FoodItem';

const FoodList = ({ foods }) => {
    
    return (
        <div>
            {foods.map((food)=>{
            return <FoodItem {...food} key={food.id}/> })}
        </div>
    );
};

export default FoodList;