import React from 'react';
import Foodbox from '../FoodBox/FoodBox'

const Col1 = ({foodList}) => {
    return (
        <div>
            {foodList.map( dish =>{
                return  <Foodbox  key={dish.id} {...dish}/> 
            })}
        </div>
    );
}

export default Col1;


