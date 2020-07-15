import React, { Component } from 'react'

class AddFoodForm extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            calories: "",
            image: "",
            quantity: ""
        }
    }
    handleInputChange = e => this.setState({ [e.target.name]: e.target.value })
    handleFormSubmit = e => {
        e.preventDefault()
        this.props.insertFood(this.state)
        this.setState({
            name: "",
            calories: "",
            image: "",
            quantity: ""
        })
    }
    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>
                    Name:
                    <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange}></input>
                </label>
                <label>
                    Calories:
                    <input name="calories" type="number" value={this.state.calories} onChange={this.handleInputChange}></input>
                </label>
                <label>
                    Image Url:
                    <input name="image" type="text" value={this.state.image} onChange={this.handleInputChange}></input>
                </label>
                <label>
                    Quantity:
                    <input name="quantity" type="number" value={this.state.quantity} onChange={this.handleInputChange}></input>
                </label>
                <button>Submit</button>
            </form>

        )
    }
}

export default AddFoodForm