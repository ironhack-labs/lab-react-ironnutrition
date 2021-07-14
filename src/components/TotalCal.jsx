import 'bulma/css/bulma.css';
import React, { Component } from 'react'

class TotalCal extends Component {

    render() {
        const {foods} = this.props

        let sum = foods.reduce((acc, food) => {
            return acc + (food.quantity * food.price)
        }, 0)

        return (
            <div>
                Today's Foods
                {
                    foods.map((food) => {
                        return (
                            <div>
                                {food.title} x {food.quantity} = {food.quantity * food.price}
                            </div>    
                        )
                    })
                }

                <h3>
                    Total: {sum} cal
                </h3>
            </div>
        )
    }
}

export default TotalCal