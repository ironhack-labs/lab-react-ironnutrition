import React from 'react'
import Foodbox from './foodbox'

const Group = ({today, deleteOne}) => {
    
    return (
        <div className="column content">
        <h2 className="subtitle">Today's foods</h2>
        <ul>
            {today.map((food, idx) => <li key={idx}>{food.quantity} {food.name} = {food.calories} cal <button className="button is-small is-danger" onClick={() => deleteOne(idx)}>Delete</button> </li>  )}
        </ul>
        <strong>Total: {today.reduce((elem, idx) => elem + idx.calories, 0)} cal</strong>
        </div>
    )
}

export default Group