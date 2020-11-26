import React, {useState} from 'react'
import foods from '../foods.json';
import FoodBox from './FoodBox.js'

const DisplayFood = () => {
    const [food, setFood] = useState(foods)
    return (
        <div>
          {food.map(food => <FoodBox
            key={food.name}
            {...food}
          />)}
        </div>
      )
}

export default DisplayFood

