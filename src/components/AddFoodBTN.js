import React from 'react'
import FoodForm from './FoodForm'


export default function AddFoodBTN() {
    return (
        <div>
            <button onClick={() => FoodForm()} className="btn btn-success" value>Add new food</button>
        </div>
    )
}
