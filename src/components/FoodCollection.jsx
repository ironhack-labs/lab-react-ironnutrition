import React from 'react'
import FoodBox from './FoodBox'

export default function FoodCollection(props) {
    const displayFood = props.foodList
        .filter((food) =>
            food.name.toLowerCase().includes(props.searchParam)
        )
        .map((food, i) => <FoodBox {...food} key={i} />);
    return (
        <div>
            {displayFood}
        </div>
    )
}

