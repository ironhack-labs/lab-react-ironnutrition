import React, { useState } from 'react'
import foods from "../foods.json";


function SimpleList() {
    const [allFoods, setAllFoods] = useState(foods)


    return (
        <div>
        <h2 className='title'>Food list</h2>
            {foods.map((food, i) => (
                <li className='food-item' key={food.name}>
                    <div>
                        <p>{food.name}</p>
                        <img className="food-image" src={food.image} />
                    </div>
                </li>
            ))}
        </div>
    )
}

export default SimpleList