import React, { Component } from 'react';
import FoodBox from './FoodBox.js';
import TodaysFood from './TodaysFood';
import foods from '../foods.json';

class FoodsList extends Component {
    state = {
        foods: [...foods],
    }

    increaseQuantity = (name) => {
        this.setState(prevState => ({
            foods: prevState.foods.map(
                    food => food.name === name ? { ...food, quantity: food.quantity + 1, added: true } : food
                )
        }));
    }

    handleInputChange = (e) => {
        this.setState({searchInput: e.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            foods: [...foods]
        })
    }

    render () {
        const allFoods = this.state.foods

        return (
            <div className='FoodList'>
                <form className="p-5 mb-2" onSubmit={this.handleSubmit}>
                    <TodaysFood foods={allFoods}/>
                    <button className="button is-success mt-2">Submit</button>
                </form>
                {
                    allFoods.map((food, idx) => {
                        return <FoodBox
                            key={idx} 
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