import React, { Component } from 'react'
import 'bulma/css/bulma.css'


export default class FoodForm extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            image: '',
            calories: 0,
            quantity: 0
        }
    }

    handleInputChange = e => {

        const { name, value } = e.target

        this.setState({ [name]: value })            
    }

    handleFormSubmit = e => {
        e.preventDefault()

        this.props.addFood(this.state)
        this.setState({
            name: '',
            image: '',
            calories: 0,
            quantity: 0
        })
    }

    render() {

        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className='field'>
                    <label>Name:</label>
                    <div className='control'>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                    </div>
                </div>

                <div className='field'>
                    <label>Image:</label>
                    <div className='control'>
                        <input type="text" name="image" value={this.state.image} onChange={this.handleInputChange} />
                    </div>
                </div>

                <div className='field'>
                    <label>Calories:</label>
                    <div className='control'>
                        <input type="number" name="calories" value={this.state.calories} onChange={this.handleInputChange} />
                    </div>
                </div>

                <div className='field'>
                    <label>Quantity:</label>
                    <div className='control'>
                        <input type="number" name="quantity" value={this.state.quantity} onChange={this.handleInputChange} />
                    </div>
                </div>

                <input type="submit" value="Create food" />
            </form>
        )
    }
}