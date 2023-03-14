import React from 'react';
import './index.css'
import FoodBox from '../FoodBox';



const FoodList = ({foods}) => {


    return (
        <div className='FoodList'>
            <h1>Food List</h1>
            <div className='RenderFoods'>
            {foods.map((food) => (
                <FoodBox key={food.name} name={food.name} calories={food.calories} 
                image={food.image} servings={food.servings}/>)
            )
            }
            </div>
                       
         </div>
    );
};

export default FoodList;

