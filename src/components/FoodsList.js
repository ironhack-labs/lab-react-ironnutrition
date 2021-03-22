import React, { Component } from 'react';
import FoodBox from './FoodBox.js';
import foods from '../foods.json';

class FoodsList extends Component {
    state = {
        foods: [...foods]
    }

    render () {
        const allFoods = this.state.foods
        console.log(allFoods)
        return (
                allFoods.map((food, idx) => {
                    return <FoodBox
                        key={idx} 
                        {...food}
                    />
                })
        )
    }

}

export default FoodsList;