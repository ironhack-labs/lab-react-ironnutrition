import React from "react"
import { Component } from "react";

class NewFoodForm extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            calories: '',
            image: '',
            quantity: '0'
        }
    }

    handleInputChange = e => {

        const name = e.target.name
        const value = e.target.value

        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.props.NewFood(this.state)

        this.setState({
            name: '',
            calories: '',
            image: '',
            quantity: '0'
        })
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit} >

                <label>
                    Name: <input type="text" value={this.state.name} onChange={this.handleInputChange} name="name" />
                </label>

                <label>
                    Calories: <input type="number" value={this.state.calories} onChange={this.handleInputChange} name="calories" />
                </label>

                <label>
                    Image: <input type="text" value={this.state.image} onChange={this.handleInputChange} name="image" />
                </label>


                <input type="submit" value="Crear comidita uwu" />
            </form >
        )
    }
}

export default NewFoodForm