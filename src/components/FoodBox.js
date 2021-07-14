import React from 'react'
import { TextField, Button } from '@material-ui/core';
import './Foodbox.css'

function FoodBox({onAddFood, food}) {
    const {name, image, calories, quantity} = food;
    return (
        <form onSubmit={(event) => onAddFood(event, food)} className="foodbox-container">
            <figure>
                <img className="food-box-img" src={image} alt={name} />
            </figure>
            <div className="food-details-container">
                <strong>{name}</strong>
                <small>{calories} cal</small>
            </div>
            <TextField label="Quantity" variant="outlined" type="number" name="quantity" min="1"/>
            <Button type="submit" className="foodbox-button" variant="contained" color="primary">+</Button>
        </form>
    )
}

export default FoodBox
