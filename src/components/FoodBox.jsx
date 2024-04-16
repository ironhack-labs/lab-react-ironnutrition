import React from 'react'
import './FoodBox.css'
import { useState } from 'react'

function FoodBox(props) {
    const {item, onDelete} = props

    const handleClick = () => {
        onDelete(item)
    }
    return (
        <div className="card">
            <div className='card-image'>
                 <img className="card-img-top" src={item.image} alt="Card image cap" />
            </div>
            
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text"><strong>Calories:</strong> {item.calories}</p>
                <p className="card-text"><strong>Servings:</strong> {item.servings}</p>
                <button onClick={handleClick} href="#" className="btn btn-primary">delete</button>
            </div>
        </div>
    )
}

export default FoodBox