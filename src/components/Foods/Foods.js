import React, { Component } from 'react'
import data from '../../foods.json'
import Foodbox from '../FoodBox/FoodBox'
import FoodForm from '../FoodForm/FoodForm'

class Foods extends Component {
    state = {
        foods: [...data]
    }

    //foods: {this.foods, NewFood}

    render() {
        return (
            <div className="FoodBox" >
                <div className="mb-5 pb-5">
                    <FoodForm />
                </div>
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