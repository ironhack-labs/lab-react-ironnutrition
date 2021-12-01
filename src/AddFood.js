import './AddFood.css'
import React, { Component } from 'react'

export default class AddFood extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            calories: "",
            image: "",
            quantity: 0
        }
    }

    handleChange = (e) => {
        let { name, value } = e.currentTarget

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.addOneFood(this.state)
        this.setState({
            name: "",
            calories: "",
            image: "",
            quantity: 0
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="newFoodForm">

                <label>
                    Name: <input onChange={this.handleChange} value={this.state.name} type="text" name="name" />
                </label>

                <label>
                    Calories: <input onChange={this.handleChange} value={this.state.calories} type="text" name="calories" />
                </label>

                <label>
                    Image: <input onChange={this.handleChange} value={this.state.image} type="text" name="image" />
                </label>

                <input type="submit" value="Add New Food" />
            </form>
        )
    }
}
