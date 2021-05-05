import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foodsData from '../../foods.json';
import FoodBox from "../FoodBox/FoodBox";
import Form from "../Form/Form";

const foodList = [...foodsData]

export default class Home extends Component {

    state = {
        food: foodList,
        showForm: false
    };

    displayFood = () =>{
    return this.state.food.map((food) =>{
        return(
        <FoodBox {...food} key={food.name} />
        )
    })
    }

    addFood = (food) => {
    const arrayCopy = [ ...this.state.food ];
    arrayCopy.push(food);

    this.setState({ food: arrayCopy });
    }

    toggleFormShow = () => {
    this.setState({ showForm: !this.state.showForm })
    }




    render() {
        return (

        <div>
            <h1>IronNutrition</h1>
            <div>
                <button onClick={() => this.toggleFormShow()}>
                {this.state.showForm ? "Ocultar" : "Añadir food"}
                </button>
                {this.state.showForm && <Form addFood={(food) => this.addFood(food)} />}
            </div>

            <div>
            { this.displayFood() }
            </div>

        </div>
        )
    }
}
