import React, { Component } from 'react'

class Total extends Component {
    //Our props will look like this

    /*

    this.props = {
        books = [{},  . . . . {}]
    }


    */






    render() {
        const { foods } = this.props

        let sum = foods.reduce((acc, food) => {
            return acc + (food.quantity * food.calories)
        }, 0)

        return (
            <div>
                <h3>
                    Today's food
                </h3>
                {
                    foods.map((food) => {
                        return (
                            <div>
                                {/* {food.title} x {book.quantity} = {book.quantity} * {book.price} */}
                                {food.name} x {food.image} = {food.calories} * {food.quantity}
                            </div>
                        )
                    })
                }

                <h3>

                    Total Calories : {sum}

                </h3>


            </div>
        )
    }
}


export default Total