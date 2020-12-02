
import React, { Component } from 'react'

export default class FoodForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            image: '',
            calories: '',
            quantity:0,
        }
    }
    handleInputChange = e => {
        const { name, value } = e.target

        this.setState({[name]:value})
    }
    handleFormSubmit = e => {
        e.preventDefault()
        this.props.addFood(this.state)
        this.setState ({
            name: '',
            image: '',
            calories: '',
            quantity:0,
        })
    }
   render()  {

        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>Name:</label><br />
                <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                <br /><br />

                <label>Image:</label><br />
                <input type="text" name="image" value={this.state.image} onChange={this.handleInputChange} />
                <br /><br />

                <label>Calories:</label><br />
                <input type="text" name="calories" value={this.state.calories} onChange={this.handleInputChange} />
                <br /><br />


                <input type="submit" value="Create Food" />
            </form>
        )
    }
}