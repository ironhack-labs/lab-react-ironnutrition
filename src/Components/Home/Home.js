import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foodsData from '../../foods.json';
import FoodBox from "../FoodBox/FoodBox";
import Form from "../Form/Form";
import SearchBar from "../SearchBar/SearchBar";

const foodList = [...foodsData]

export default class Home extends Component {

    state = {
        food: foodList,
        formButton: false
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

    toggleButton = () => {
    this.setState({ formButton: !this.state.formButton })
    }

    render() {
        return (

        <div>
            <h1>IronNutrition</h1>
            <div>
                <button onClick={() => this.toggleButton()}>
                {this.state.formButton ? "Hide" : "Add food"}
                </button>
                {this.state.formButton && <Form addFood={(food) => this.addFood(food)} showForm={this.toggleButton}/>}
            </div>

            <div>
                <SearchBar />
            </div>

        </div>
        )
    }
}
