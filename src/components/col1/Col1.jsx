import React from 'react';
import Foodbox from '../FoodBox/FoodBox'

const Col1 = ({foodList, addItem, quantityChange}) => {
    return (
        <div>
            {foodList.map( dish =>{
                return  <Foodbox  key={dish.id} {...dish} 
                addItem = {() => addItem(dish)}  
                quantityChange = {() => quantityChange(dish)}
                /> 
            })}
        </div>
    );
}

export default Col1;


