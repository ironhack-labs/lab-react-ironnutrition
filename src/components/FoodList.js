import "./FoodList.css"
import foods from '../foods.json';
import DisplayBox from "./DisplayBox/DisplayBox";
import React, { Component } from 'react'
import AddFood from "./addFood/AddFood";

export default class FoodBox extends Component {

    constructor() {
        super()

        this.state = {

            food: foods

        }
    }


    displayFood = () => {

        const eachFood = this.state.food

        return (
            eachFood.map((food) => {
                return <DisplayBox {...food} />
            })
        )
    }

    addFood = (food) => {

        const foodCopy = [...this.state.food];

        foodCopy.push(food);
        this.setState({
            ...this.state,
            food: foodCopy
        }, () => console.log('Estado modificado'))


    }

    render() {


        return (
            <div>

           
                <AddFood addFood = {this.addFood} />
                {this.displayFood()}



            </div>
        )
    }
}

