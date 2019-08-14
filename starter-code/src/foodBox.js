import React from 'react'
import { Link } from 'react-router-dom'
import foods from './foods.json'

// props.match.params es el objeto que guarda cada URL param

const FoodBox = props => {

    const getFood = (name) => {
        const theFood = oneFood => {
            return oneFood.name === name
        }
        return foods.find(theFood)
    }

    const foundFood = getProject(props.match.params.name) // <== ojo

    return (
        <div>
            <h2>{foundFood.name} <span style={{ fontSize: "14px" }}>{foundProject.year}</span></h2>
        </div>
    )
}

export default FoodBox;
