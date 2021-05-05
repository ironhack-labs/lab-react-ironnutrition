import React, { Component } from 'react';
import foods from '../foods.json';
import 'bulma/css/bulma.css';
import FoodBox from './foodBox'

class FoodBoxContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    generateBox = (elements) => {
        let foodBoxes = [];

        elements.forEach(element => {
            foodBoxes.push(<FoodBox img={element.image} name={element.name} cal={element.calories} quan={element.quantity} />);
        });
        return foodBoxes;
    }

    render() {
        const foodBoxing = this.generateBox(foods)
        return (
            <>{foodBoxing}</>
        )
    }
}

export default FoodBoxContainer;