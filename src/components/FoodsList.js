import React, { Component } from 'react';
import FoodBox from './FoodBox.js';
import TodaysFood from './TodaysFood';
import foods from '../foods.json';
import uuid from 'react-uuid';
import AddFood from './AddFood.js';

class FoodsList extends Component {
    state = {
        foods: [...foods],
        searchInput: '',
        filtered: [...foods]
    }

    increaseQuantity = (name) => {
        this.setState(prevState => ({
            foods: prevState.foods.map(
                    food => food.name === name ? { ...food, quantity: food.quantity + 1, added: true } : food
                )
        }));
    }

    handleInputSearch = (event) => {
        this.setState({searchInput: event.target.value.toLowerCase()})
        let searchedFoods = this.state.foods.filter(food => food.name.toLowerCase().includes(event.target.value.toLowerCase()))
        this.setState({
            filtered: searchedFoods
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            foods: [...foods]
        })
    }

    createFood = (newFood) => {
        this.setState({
            foods: [...this.state.foods, newFood]
        })
    }


    render () {
        let allFoods = this.state.foods;

        if (this.state.searchInput !== '') {
            allFoods = this.state.filtered;
        }

        return (
            <div className='FoodList p-3 m-3'>
                {/* <form className="m-5">
                </form> */}
                <form className="box" onSubmit={this.handleSubmit}>
                    <input className="input mb-2" value={this.state.searchInput} type="search" onChange={(e) => this.handleInputSearch(e)}/>
                    <TodaysFood foods={allFoods}/>
                </form>
                <h2 className="mb-2"><b>Foods List</b></h2>
                {   
                    allFoods.map((food) => {
                        return <FoodBox
                            key={uuid()} 
                            {...food}
                            addFood={() => this.increaseQuantity(food.name)}
                        />
                    }) 
                }
                <AddFood 
                    createFood={this.createFood}
                />
            </div>
        )
    }

}

export default FoodsList;