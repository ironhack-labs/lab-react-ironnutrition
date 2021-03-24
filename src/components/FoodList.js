import React, { Component } from 'react';
import foods from '../foods.json';
import FoodBox from './FoodBox';
import { v4 as uuidv4 } from 'uuid';

// uuidv4();



export default class FoodList extends Component {
    state = {
        foods: foods.map(food => ({
            ...food, key: uuidv4()
        }))
    }

    render() {
        const { foods } = this.state
        return (
            <div>
                {foods.map((food, i) => {
                    return (
                        <FoodBox {...food}  />
                    )
                } )}
            </div>
        )
    }

}