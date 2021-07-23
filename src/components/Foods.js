import React, { Component } from 'react';
import foods from '../foods.json';
import 'bulma/css/bulma.css';
import FoodBox from './Foodbox';
import FoodForm from './FoodForm';
import Search from './Search';

class Foods extends Component {
    state = {
        foods,
        form: false,
        filteredFoods: foods,
    }

    handleClick = () => {
        this.setState({
            form: !this.state.form
        })
    }

    addFood = (food) => {
        let newFoods = [...this.state.foods]
        
        newFoods.push(food)

        this.setState({
            foods: newFoods,
            form: false
        })
    }

    filterFood = (inputSearch) => {
        const filtered = this.state.foods.filter((food)=>{
            return food.name.toLowerCase().includes(inputSearch.toLowerCase())
        })

        this.setState({
            filteredFoods: filtered
        })
    }

    render() {
        return (
            <>
                <h1>IronNutrition</h1>
                <Search filterFood = {this.filterFood}/>
                <button className='button' onClick = {this.handleClick}>
                    {this.state.form ? 'Hide' : 'Add Food'}
                </button>
                    {this.state.form ? <FoodForm addFood = {this.addFood}/> : null }
                <div>
                    {this.state.filteredFoods.map((food, index) => { return(
                        <FoodBox key={index} name = {food.name} calories = {food.calories} image = {food.image}/>
                    )
                    })}
                </div>
            </>
        )
    }
}

export default Foods