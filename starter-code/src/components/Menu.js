import React, { Component } from 'react'

export default class Menu extends Component {

    constructor(props){
        super(props);
    }

    renderFoodProperties = (foodItem) =>{
        console.log( "food NAME -----", foodItem.name)
        if(foodItem.quantity) {
            return (<li key={foodItem.name}>
                {foodItem.quantity} * {foodItem.name} = {foodItem.calories*foodItem.quantity} calories
            </li>)} 
    }

    renderTotal =   (selectedFood) => {
        let sum=0
        selectedFood.forEach( foodItem => sum +=foodItem.calories*foodItem.quantity)
        return sum
    }


    render() {
        return (
            <div className="Menu column">
                <strong>Today's food</strong>
                <ul>
                    {this.props.selectedFood.map(foodItem => this.renderFoodProperties(foodItem))}
                </ul>
                <h2>Total : {this.renderTotal(this.props.selectedFood)} calories </h2>
                
            </div>
        )
    }
}
