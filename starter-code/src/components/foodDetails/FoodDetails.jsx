import React, { Component } from 'react';

export default class FoodDetails extends Component {

    render() {
        return(
        <div className="FoodDetails">
            <h1>Comeme el bocata</h1>
            <ul>
                {
                    this.props.foodList.map((food,index) =>{
                        return <li key={index} >{food.quantity} {food.name} {food.calories} cal</li>
                    })
                }
            </ul>
            <p>{this.props.totalCalories}</p>
        </div>
        )
    }
}