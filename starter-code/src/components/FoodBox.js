import React from 'react'
import StyledCard from './styles/Styles'

function FoodBox(props) {
    return (
        <StyledCard>
            <div>
                
                <img src={props.image} alt={props.name}/>
                <div>
                <h3>{props.name}</h3>
                <p> {props.calories} cal</p>
                </div>
                <input type='number' placeholder={props.quantity}/>
                <button onClick={()=>props.addFood(props.name)}>+</button>
            </div>
        </StyledCard>
    )
}

export default FoodBox
