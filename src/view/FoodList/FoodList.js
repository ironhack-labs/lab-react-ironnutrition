import React from 'react'
import FoodBox from '../../components/FoodBox';
import FormNewFood from '../../components/FormNewFood';
import { capitalizeStr } from '../../tools/capitalizeString'

function FoodList({state, handleChange, handleSubmit, handleNewFoodBtn, handleSearchBar}) {
    const wordToFind = capitalizeStr(state.searchBar)
    const allFoodCards = state.foods
                                .filter(food => food.name.substring(0, state.searchBar.length) === wordToFind)
                                .map(food => <FoodBox key={food.name} {...food} />)
    return (
        <div className='box'>
            <div className='field'>
                <div className='control'>
                    <input className='input' type='text' value={state.searchBar} onChange={handleSearchBar} />
                </div>
            </div>
            <div id='food-list'>
                {allFoodCards}
                {state.showForm ? 
                    <FormNewFood handleChange={handleChange} handleSubmit={handleSubmit} /> : 
                    <button className='button is-primary' onClick={handleNewFoodBtn} >Add new food</button>
                }
            </div>
        </div>
    )
}

export default FoodList
