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
        searchBar: '',
        todayList: []
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
    const handleFoodQuantity = ({target}) => {
        const newFoodState = state.foods.map(food => food.name === target.name ? ({...food, quantity: food.quantity + 1}) : food)
        setState(state => ({
            ...state,
            foods: newFoodState 
        }))
    }
    const handleAddFood = ({target}) => {
        const foodToAdd = state.foods.filter(food => food.name === target.name)
        const indexFood = state.todayList.findIndex(food => food.name === target.name)
        let todayListUpdated = []
        if (indexFood === -1) {
            todayListUpdated = [...state.todayList, ...foodToAdd]
        } else {
            todayListUpdated = state.todayList.map(food => food.name !== target.name ? food : {...food, quantity: food.quantity + foodToAdd[0].quantity})
        }
        setState(state => ({
            ...state,
            todayList: todayListUpdated
        })) 
    }
    const handleDeleteOnToday = ({target}) => {
        const todayListUpdated = state.todayList.filter(food => food.name !== target.id)
        setState(state => ({
            ...state,
            todayList: todayListUpdated
        })) 
    }
    return (
        <FoodList 
            state={state} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
            handleNewFoodBtn={handleNewFoodBtn} 
            handleSearchBar={handleSearchBar}
            handleFoodQuantity={handleFoodQuantity}
            handleAddFood={handleAddFood}
            handleDeleteOnToday={handleDeleteOnToday}
        />
    )
}

export default FoodListCt
