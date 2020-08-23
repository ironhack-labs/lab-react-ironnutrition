import React from 'react'
import FoodForm from './FoodForm'
import { Link } from 'react-router-dom'



export default function AddFoodBTN() {
    return (
        <div>
            <button onClick={() => FoodForm()} className="btn btn-success" value>Add new food</button>
        </div>
    )
}
