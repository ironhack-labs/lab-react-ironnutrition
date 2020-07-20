import React, { useState } from 'react'
import foods from '../foods.json'

function FoodList() {
    const foodInitialState = {
        foods: foods,
        newFood: {
            name: '',
            calories: 0,
            image: '',
            quantity: 0
        },
        showForm: false,
        searchBar: '',
        todayList: []
    }
    const [state, setState] = useState(foodInitialState)
    const handleChangeForm = ({target}) => {
        setState(state => ({
            ...state,
            newFood: {
                ...state.newFood,
                [target.name]: target.value
            }
        }))
    }
    const handleAddFood = e => {
        e.preventDefault()
        setState(state => ({
            ...state,
            foods: [...state.foods, state.newFood],
            showForm: false
        }))
    }
    const handleAddFoodBTN = () => {
        setState(state => ({
            ...state,
            showForm: true
        }))
    }
    return (
        <FoodList 
            state={state} 
            handleAddFood={handleAddFood}
            handleChangeForm={handleChangeForm} 
            handleAddFoodBTN={handleAddFoodBTN} 
            
        
        />
    )
}