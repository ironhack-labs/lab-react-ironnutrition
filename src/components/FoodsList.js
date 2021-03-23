import React, { Component } from 'react';
import FoodBox from './FoodBox.js';
import TodaysFood from './TodaysFood';
import foods from '../foods.json';
import uuid from 'react-uuid';

class FoodsList extends Component {
    state = {
        foods: [...foods],
        searchInput: ''
    }

    increaseQuantity = (name) => {
        this.setState(prevState => ({
            foods: prevState.foods.map(
                    food => food.name === name ? { ...food, quantity: food.quantity + 1, added: true } : food
                )
        }));
    }

    handleInputSearch = (event) => {
        this.setState({searchInput: event.target.value})
        let searchedFoods = this.state.foods.filter(food => {
            console.log('event.target.name', event.target.value)
            return food.name.includes(event.target.value)
        })
        this.setState({
            foods: searchedFoods
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            foods: [...foods],
        })
    }

    render () {
        const allFoods = this.state.foods

        return (
            <div className='FoodList'>
                {/* <form className="m-5">
                </form> */}
                <form className="p-3 m-3" onSubmit={this.handleSubmit}>
                    <input className="input mb-2" value={this.state.searchInput} type="search" onChange={(e) => this.handleInputSearch(e)}/>
                    <TodaysFood foods={allFoods}/>
                    <button className="button is-success mt-2">Submit</button>
                </form>
                {
                    allFoods.map((food, idx) => {
                        return <FoodBox
                            key={uuid()} 
                            {...food}
                            addFood={() => this.increaseQuantity(food.name)}
                        />
                    })
                }
            </div>
        )
    }

}

export default FoodsList;