import React, { Component } from 'react'


export default class FoodForm extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            image: '',
            calories: '',
            quantity: ''
        }
    }

    handleNameChange = e => this.setState({ name: e.target.value })
    handleImageChange = e => this.setState({ image: e.target.value })
    handleCaloriesChange = e => this.setState({ calories: e.target.value })
    handleQuantityChange = e => this.setState({ quantity: e.target.value })

    
    handleFormSubmit = e => {
        e.preventDefault()

        // // validation
        // this.props.addFood(this.state)
        // this.setState({
        //     name: '',
        //     image: '',
        //     calories: '',
        //     quantity: ''
        // })
    }

    render() {

        console.log(this.props)

        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>Name:</label><br />
                <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange} />
                <br /><br />

                <label>Image:</label><br />
                <input type="text" name="image" value={this.state.image} onChange={this.handleImageChange} />
                <br /><br />

                <label>Calories:</label><br />
                <input type="text" name="calories" checked={this.state.calories} onChange={this.handleCaloriesChange} />
                <br /><br />

                <label>Quantity:</label><br />
                <input type="text" name="quantity" value={this.state.quantity} onChange={this.handleQuantityChange} />
                <br /><br />

                <input type="submit" value="Create Food" />
            </form>
        )
    }
}