import React from 'react'
import 'bulma/css/bulma.css';
import FoodCard from './FoodCard';

function FoodBox(props) {

    return <div>

        {props.foods.map((food) => {
            return <FoodCard name={food.name} image={food.image} calories={food.calories} />
        })}

    </div>

}

export default FoodBox