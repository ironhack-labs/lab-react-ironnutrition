import React, { Component } from 'react'
import AddFood from './AddFood'
import Details from './Details'

class FoodBox extends Component {

    state = {
        showForm: true
    }

    handleClick = () => {
        this.setState({
            showForm: true
        })
    }

    handleAddFood = (event) => {
        event.preventDefault()



        this.setState({
            showForm: false
        })

        // let newFood = {
        //     name: event.target.name.value,
        //     calories: event.target.calories.value
        // }
        // this.props.onAddNewFood(newfood)

    }

    render() {
        // destructure your books here
        const { foods, handleAddTotal } = this.props
        const { showForm } = this.state

        return (
            <div>
                List

                {/* condintional rendering with ternaries */}

                {

                    showForm ? <AddFood onAddFood={this.handleAddFood} /> : <button onClick={this.handleClick}>Show Form</button>


                }


                {
                    foods.map((food, i) => {
                        return <Details
                            key={i}
                            myFood={food}
                            handleAddTotal={handleAddTotal}

                        />
                    })
                }
            </div>
        )
    }
}

export default FoodBox