import React, { Component } from 'react';
import FoodBox from './FoodBox.js';
import TodaysFood from './TodaysFood';
import foods from '../foods.json';

class FoodsList extends Component {
    state = {
        foods: [...foods]
    }

    // addFood = (food) => {
    //     this.setState({

    //     })
    // }

    increaseQuantity = (name) => {
        this.setState(prevState => ({
            foods: prevState.foods.map(
                    food => food.name === name ? { ...food, quantity: food.quantity + 1, added: true } : food
                )
            }));
        }

    render () {
        const allFoods = this.state.foods

        return (
            <div className='FoodList'>
                {
                    allFoods.map((food, idx) => {
                        return <FoodBox
                            key={idx} 
                            {...food}
                            addFood={() => this.increaseQuantity(food.name)}
                        />
                    })
                }
                <TodaysFood foods={allFoods}/>
            </div>
        )
    }

}

export default FoodsList;