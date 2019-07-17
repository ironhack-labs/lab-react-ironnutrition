import React, { Component } from 'react'
import data from '../foods.json'
import FoodBox from './FoodBox.js';

class FoodList extends Component {
    state = {
        foodItems:data
    }
    
    render(){
        return(
            <div>
                {this.state.foodItems.map((e,i)=> <FoodBox {...e} key={i}/> )}
            </div>

        )
    }
}

export default FoodList
