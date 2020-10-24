//import React from "react";
import FoodBox from "./FoodBox"

import React, { Component } from 'react'

export default class FoodItem extends Component {
    render() {
        return (
            <div>
                 {this.props.foods.map((oneItem, index) =>
            <FoodBox
               key={index}
               name={oneItem.name}
               calories={oneItem.calories}
               image={oneItem.image}
               
             />)
           }
            </div>
        )
    }
}





