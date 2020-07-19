import React from 'react'
import FoodBox from '../../components/FoodBox';
import FormNewFood from '../../components/FormNewFood';

function FoodList({state, handleChange, handleSubmit, handleNewFoodBtn}) {
    const allFoodCards = state.foods.map(food => <FoodBox key={food.name} {...food} />)
    return (
        <div className='box'>
            {allFoodCards}
            {state.showForm ? 
                <FormNewFood handleChange={handleChange} handleSubmit={handleSubmit} /> : 
                <button className='button is-primary' onClick={handleNewFoodBtn} >Add new food</button>
            }
        </div>
    )
}

export default FoodList
