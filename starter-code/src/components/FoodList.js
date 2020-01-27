import React, { Component } from 'react'
import FoodBox from './FoodBox.js';

export default class FoodList extends Component {
    constructor(){
        super();
        this.state = {
        }
    }    

    render() {
        //console.log( "PROPS", this.props.foodList );
        let output = this.props.foodList.map( (oneFood, id) => {
            return( <FoodBox key={id} food={oneFood} /> );
            });

        return (
            <div>
               { output } 
            </div>
        )
    }
}
