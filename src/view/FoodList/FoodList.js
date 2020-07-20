import React from 'react'
import FoodBox from '../../components/FoodBox';
import FormNewFood from '../../components/FormNewFood';
//import { capitalizeStr } from '../../tools/capitalizeString'
import TodayListElement from '../../components/TodayListElement';
import SearchBar from '../../components/SearchBar';
import TodayFoods from '../../components/TodayFoods';

function FoodList({state, handleChangeForm, handleSubmitForm, handleNewFoodBtn, handleSearchBar, handleFoodQuantity, handleAddFood, handleDeleteOnToday}) {
    //const wordToFind = capitalizeStr(state.searchBar)
    const allFoodCards = state.foods
                                .filter(food => food.name.toLowerCase().includes(state.searchBar))
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
            <SearchBar handleSearchBar={handleSearchBar} state={state} />
            <div className='columns'>
                <div className='column'>
                    {allFoodCards}
                    {state.showForm ? 
                        <FormNewFood handleChangeForm={handleChangeForm} handleSubmitForm={handleSubmitForm} /> : 
                        <button className='button is-primary' onClick={handleNewFoodBtn} >Add new food</button>
                    }
                </div>
                <TodayFoods todayListFoods={todayListFoods} totalCalories={totalCalories} />
            </div>
        </div>
    )
}

export default FoodList
