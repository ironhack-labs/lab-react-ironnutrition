import React, { Component } from 'react'
import foods from './../../foods.json';

import 'bulma/css/bulma.css';
import FoodBox from '../FoodBox/FoodBox';
import FoodForm from '../FoodForm/FoodForm';



class FoodList extends Component {
    constructor() {
        super()
        this.state = {
            foods
        }
    }

    // Inserción food
    insertFood = newFood => {
        const foodCopy = [...this.state.foods]
        foodCopy.push(newFood)
        this.setState({ foods: foodCopy })
    }

    render() {

        return (
            <>
                <h3>Create a food</h3>
                <FoodForm insertFood={this.insertFood} />
                {this.state.foods.map((elm, idx) => <FoodBox {...elm} key={idx} />)}

            </>
        )
    }

}


export default FoodList