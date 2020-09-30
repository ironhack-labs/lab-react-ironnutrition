import React, { Component } from 'react'

class NewFoodForm extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            calories: '',
            image: '',
            quantity: 0
        }
    }

    handleInputChange = e => {
        let { name, value } = e.target

        this.setState({ [name]: value})
    }

    handleSubmit = e => {
        
        e.preventDefault()

        this.props.addFood(this.state)

        this.setState({
            name: '',
            calories: '',
            image: '',
            quantity: 0
        })

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
                <br /><br />

                <label>Calories:</label>
                <input type="number" name="calories" value={this.state.calories} onChange={this.handleInputChange} />
                <br /><br />

                <label>Image:</label>
                <input type="text" name="image" value={this.state.image} onChange={this.handleInputChange} />
                <br /><br />

                    <label>Quantity:</label>
                <input type='number' name='quantity' value={this.state.quantity} onChange={this.handleInputChange} />
                <br /><br />

                <input type="submit" value="Submit" />
        </form>
        )
    }
}

export default NewFoodForm