import React, { Component } from 'react'
import FoodBox from './FoodBox.js';

export default class FoodList extends Component {
    constructor(){
        super();
        this.state = {
        }
    }    

    render() {
        const foodsMatchFilter = this.props.foodList.filter( elem => {
            return elem.name.includes( this.props.filter );
        })

        let output = foodsMatchFilter.map( (oneFood) => {
            return( <FoodBox key={"FL"+oneFood.ind} food={oneFood} addNewFoodTodayToListHandler={this.props.addNewFoodTodayToListHandler}/> );
            });

        return (
            <div>
               { output } 
            </div>
        )
    }
}
