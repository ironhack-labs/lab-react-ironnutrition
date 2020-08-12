import React, { Component } from "react";
import CardFood from "./card";
import foods from '../foods.json';

class FoodBox extends Component {

    constructor(props) {
      
        super(props)
  
        this.state = {
  
          foods: foods
          
        }
    }
    render() {
        return(
            <div>
                {this.state.foods.map((food, index) => <CardFood {...food} key={index} />)}
            </div>
        )
    }

}

export default FoodBox