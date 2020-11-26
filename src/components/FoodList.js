import React, {useState} from 'react'
import foods from '../foods.json'
import FoodBox from './FoodBox'
import AddFood from './AddFood'
import Search from './Search'

const FoodList = () => {
    const [dishes, setDishes] = useState(foods)
    const [addFood, setAddFood] = useState(false)

    function addNewFood(food) {
        setDishes([...dishes, food])
        setAddFood(!addFood)
      }

    return (
        <div>
            {addFood && <AddFood addNewFood={addNewFood} />}
            <button onClick={() => setAddFood(!addFood)} className="button is-info">Add new dish</button>
            <Search ff={dishes}/>
            {dishes.map(f=> (
            <FoodBox name={f.name} image={f.image} calories={f.calories}/>
            ))}
        </div>
    )
}

export default FoodList
