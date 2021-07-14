import React from 'react';
import FoodBox from './FoodBox';

function FoodContainer({foods, onAddFood}) {
    return (
        <div>
            {foods.map((food, index) => {
                return <FoodBox onAddFood={onAddFood} food={food} key={index}/>
            })}
        </div>
    )
}

export default FoodContainer;