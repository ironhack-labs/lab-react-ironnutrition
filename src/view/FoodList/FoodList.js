import React from 'react'
import FoodBox from '../../components/FoodBox';
import FormNewFood from '../../components/FormNewFood';
import { capitalizeStr } from '../../tools/capitalizeString'
import TodayListElement from '../../components/TodayListElement';

function FoodList({state, handleChange, handleSubmit, handleNewFoodBtn, handleSearchBar, handleFoodQuantity, handleAddFood, handleDeleteOnToday}) {
    const wordToFind = capitalizeStr(state.searchBar)
    const allFoodCards = state.foods
                                .filter(food => food.name.substring(0, state.searchBar.length) === wordToFind)
                                .map(food => <FoodBox 
                                                key={food.name} 
                                                food={food} 
                                                handleFoodQuantity={handleFoodQuantity} 
                                                handleAddFood={handleAddFood} 
                                                />
                                )
    const todayListFoods = state.todayList.map(food => <TodayListElement key={food.name} food={food} handleDeleteOnToday={handleDeleteOnToday} />)
    const totalCalories = state.todayList.reduce((acc, food) => acc + food.quantity*food.calories, 0)
    return (
        <div className='box'>
            <div className='field'>
                <div className='control'>
                    <input className='input' type='text' value={state.searchBar} onChange={handleSearchBar} />
                </div>
            </div>
            <div className='columns'>
                <div className='column'>
                    {allFoodCards}
                    {state.showForm ? 
                        <FormNewFood handleChange={handleChange} handleSubmit={handleSubmit} /> : 
                        <button className='button is-primary' onClick={handleNewFoodBtn} >Add new food</button>
                    }
                </div>
                <div className='column'>
                    <p id='todays'>Today's foods</p>
                    <ul>{todayListFoods}</ul>
                    <p>Total: <b>{totalCalories} cal</b></p>
                </div>
            </div>
        </div>
    )
}

export default FoodList
