import { Component } from "react";
import React from "react"
import FoodBox from './FoodBox';
import foods from './foods.json';


class DisplayAllFoods extends Component {
    constructor() {
        super()
        this.state =  {
            foods: foods
        }
    }

    render() {
        return this.state.foods.map((elm, index) => <FoodBox key={index} {...elm} />)

    }
}


// // // // // const displayAllFoods = () => {
// // // // //     console.log(foods.length)
// // // // //     return (

// // // // //         <div>
// // // // //             {foods.map((elm, index) => <FoodBox key={index} {...elm} />)}
// // // // //         </div>
// // // // //     )
// // // // // }

export default DisplayAllFoods
