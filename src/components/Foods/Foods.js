import React, { Component } from 'react'
import data from '../../foods.json'
import Foodbox from '../FoodBox/FoodBox'

class Foods extends Component {
    state = {
        foods: [...data]
    }

    render() {
        return (
            <div className="FoodBox" >
                {this.state.foods.map((food) => {
                    return(
                        <Foodbox {...food} key={food.name}/>
                    )
                })}
            </div>

        )
    }
}

export default Foods