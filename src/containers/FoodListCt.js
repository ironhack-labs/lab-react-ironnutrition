import React, { useState } from 'react'
import FoodList from '../view/FoodList/FoodList'
import foods from '../foods.json'

function FoodListCt() {
    const foodInitialState = {
        foods: foods,
        newFood: {
            name: '',
            calories: 0,
            image: '',
            quantity: 0
        },
        showForm: false,
        searchBar: ''
    }
    const [state, setState] = useState(foodInitialState)
    const handleChange = ({target}) => {
        setState(state => ({
            ...state,
            newFood: {
                ...state.newFood,
                [target.name]: target.value
            }
        }))
    }
    const handleSubmit = e => {
        e.preventDefault()
        setState(state => ({
            ...state,
            foods: [...state.foods, state.newFood],
            showForm: false
        }))
    }
    const handleNewFoodBtn = () => {
        setState(state => ({
            ...state,
            showForm: true
        }))
    }
    const handleSearchBar = ({target}) => {
        setState(state => ({
            ...state,
            searchBar: target.value
        }))
    }
    return (
        <FoodList 
            state={state} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
            handleNewFoodBtn={handleNewFoodBtn} 
            handleSearchBar={handleSearchBar}
        />
    )
}

export default FoodListCt
